const router = require('express').Router();
const { Tile, User, Comment, TrackerStatus } = require('../../models');
// const withAuth = require('../../utils/auth');

// The `/api/tiles` endpoint

 
// GET one tile, with associated user and comment data
router.get('/:id', async (req, res) => {
    try {
        const tilesData = await Tile.findByPk(req.params.id, {
            include: [
                { model: User }, 
                { model: Comment }
            ],
        });
            res.status(200).json(tilesData);
    } catch (err) {
            console.log(err);
    res.status(500).json(err);
    }
});



module.exports = router;
