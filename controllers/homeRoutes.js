const router = require('express').Router();
const { User } = require('../models');


// ------------------------------------------------------------------------------------------
// for testing during development 

// test route for layout development
router.get('/meg', async (req, res) => {
  res.render('test-becca');
});

// test route for any script/route development
router.get('/ben', async (req, res) => {
  res.render('test-ben');
});

// test route for development
router.get('/becca', async (req, res) => {
  res.render('test-becca');
});

// test route for development
router.get('/test-becca-login', async (req, res) => {
  res.render('test-becca-login');
});

// test route for development
router.get('/test', async (req, res) => {
  res.render('test');
});

// ------------------------------------------------------------------------------------------



router.get('/', async (req, res) => {
    //logged in renders /user of logged in user
    try {
        // update below based on what we decide to pass into the TODO page
        const userData = await User.findAll({
          attributes: { exclude: ['password'] },
          order: [['name', 'ASC']],
        });
        const users = userData.map((project) => project.get({ plain: true }));
        res.render('TODO', { //TODO: Find logged in 
          // update below based on what we decide to pass into the TODO page
          users,
          // Pass the logged in flag to the template
          logged_in: req.session.logged_in,
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

module.exports = router;
