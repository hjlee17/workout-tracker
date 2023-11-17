const router = require('express').Router();
const sequelize = require('../config/connections');
const { User, Tile, Comment } = require('../models');
const withAuth = require('../utils/auth');


// GET all tiles (by all users) to render to homepage
router.get('/', async (req, res) => {
    try {
        const tileData = await Post.findAll({
            include: [
                {
                  model: User,
                  attributes: ['first_name'],
                },
            ],
        });

        const posts = tileData.map((tile) => tile.get({ plain: true }));
        console.log('tiles:', tiles)

        // render homepage
        res.render('test-becca', {
            tiles,
            logged_in: req.session.logged_in
        });

    } catch (error) {
        res.status(500).json(error);
    }
});



// GET all tiles (by logged in user) to render to dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    console.log('req:', req.session.user_id)
    try {
        const tileData = await Tile.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                  model: User,
                  attributes: ['first_name'],
                },
            ],
        });

        const tiles = tileData.map((tile) => tile.get({ plain: true }));
        console.log('tiles:', tiles)

        // render homepage
        res.render('test-becca', {
            tiles,
            logged_in: req.session.logged_in
        });

    } catch (error) {
        res.status(500).json(error);
    }

});

// login route



module.exports = router;