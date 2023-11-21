const router = require('express').Router();
const { User, Tile, Comment, Tracker } = require('../models');
const withAuth = require('../utils/auth');

// Test routes for layout and script development
router.get('/meg', async (req, res) => {
  res.render('test-meg');
});

router.get('/ben', async (req, res) => {
  res.render('test-ben');
});

router.get('/becca', async (req, res) => {
  res.render('test-becca');
});

router.get('/login', async (req, res) => {
  res.render('login-and-signup');
});

router.get('/dashboard', async (req, res) => {
  res.render('dashboard');
});

router.get('/test', async (req, res) => {
  res.render('test');
});

// Render homepage with all users and their tiles
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: Tile,
        },
      ],
    });

    const users = userData.map((user) => user.get({ plain: true }));
    console.log('users:', users);

    res.render('dashboard', {
      users,
      logged_in: req.session.logged_in,
    });

  } catch (error) {
    res.status(500).json(error);
  }
});

// Render user's dashboard with their tiles
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const tileData = await Tile.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['first_name'],
        },
        {
          model: Comment,
        },
        {
          model: Tracker,
          attributes: ['id', 'tracker_goal', 'current_tracker_status', 'percentage'],
        },
      ],
    });

    const loggedInUser = req.session.user_id;

    const tiles = tileData.map(tile => {
      const oneTile = tile.get({ plain: true });
      oneTile.user_logged_in = true;
      return oneTile;
    });

    console.log('tiles:', tiles);

    res.render('dashboard', {
      tiles,
      logged_in: req.session.logged_in,
    });

  } catch (error) {
    res.status(500).json(error);
  }
});

// Render a specific user's tiles
router.get('/users/:id', withAuth, async (req, res) => {
  const loggedInUser = req.session.user_id;

  try {
    const tileData = await Tile.findAll({
      where: {
        user_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['first_name', 'last_name'],
        },
        {
          model: Comment,
          attributes: ['id', 'date_created', 'content', 'user_id', 'tile_id'],
        },
        {
          model: Tracker,
          attributes: ['id', 'tracker_goal', 'current_tracker_status', 'percentage', 'tile_id'],
        },
      ],
    });

    if (!tileData) {
      res.status(404).json({ message: 'No tiles exist!' });
      return;
    }

    const tiles = tileData.map(tile => {
      const oneTile = tile.get({ plain: true });
      oneTile.user_logged_in = loggedInUser === oneTile.user_id || loggedInUser === tile.user_id;
      return oneTile;
    });

    console.log('tiles:', tiles);

    if (loggedInUser == req.params.id) {
      res.redirect('/dashboard');
      return;
    }

    res.render('test-becca-single-user', {
      tiles,
      logged_in: req.session.logged_in,
    });

  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// Render a specific tile and its comments
router.get('/tiles/:id', withAuth, async (req, res) => {
  const loggedInUser = req.session.user_id;

  try {
    const [tileData, commentData] = await Promise.all([
      Tile.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['first_name'],
          },
        ],
      }),

      Comment.findAll({
        where: {
          tile_id: req.params.id,
        },
        include: [
          {
            model: User,
            attributes: ['first_name'],
          },
        ],
        attributes: ['id', 'date_created', 'content', 'user_id', 'tile_id'],
      }),
    ]);

    if (!tileData) {
      res.status(404).json({ message: 'No tile exists with this id!' });
      return;
    }

    const tile = tileData.get({ plain: true });
    tile.user_logged_in = loggedInUser === tile.user_id;
    console.log('tile:', tile);

    const comments = commentData.map(comment => {
      const oneComment = comment.get({ plain: true });
      oneComment.user_logged_in = loggedInUser === oneComment.user_id || loggedInUser === tile.user_id;
      return oneComment;
    });
    console.log('comments:', comments);

    res.render('test-becca-single-tile', {
      tile,
      comments,
      logged_in: req.session.logged_in,
    });

  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// Render confirmation page before deleting a tile
router.get('/tiles/delete/:id', withAuth, async (req, res) => {
  try {
    const tileData = await Tile.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['first_name'],
        },
      ],
    });

    if (!tileData) {
      res.status(404).json({ message: 'No tile exists with this id!' });
      return;
    }

    const tile = tileData.get({ plain: true });

    if (req.session.user_id !== tile.user_id) {
      res.redirect('/test');
      return;
    }

    tile.logged_in = req.session.logged_in;
    console.log('delete tile:', tile);

    res.render('confirm-delete-tile', {
      tile,
      logged_in: req.session.logged_in,
    });

  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// Login route
router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login-and-signup');
});

module.exports = router;