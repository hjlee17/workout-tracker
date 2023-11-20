const { Tile } = require('../models');

const tileData = [
    {
        title: "Steps",
        date_created: "10-01-2023",
        description: "Reach 200,000 steps in a month.",
        user_id: 1
    },
    {
        title: "Miles Biked",
        date_created: "10-02-2023",
        description: "Want to run 5 miles in a month.",
        user_id: 1
    },
    {
        title: "Push-Ups",
        date_created: "10-03-2023",
        description: "Want to do 500 pushups in a month.",
        user_id: 2
    },
    {
        title: "Miles Ran",
        date_created: "10-04-2023",
        description: "Want to run 99,999 miles this month.",
        user_id: 2
    },
    {
        title: "Minutes Walked",
        date_created: "10-05-2023",
        description: "Want to walk 600 minutes this month.",
        user_id: 3
    },
    {
        title: "Pool Visits",
        date_created: "10-06-2023",
        description: "Want to go to the pool 15 times this month.",
        user_id: 3
    }
];

const seedTiles = () => Tile.bulkCreate(tileData);

module.exports = seedTiles;