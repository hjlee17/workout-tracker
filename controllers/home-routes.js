const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    //logged in renders /user of logged in user
    try {\
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
    
