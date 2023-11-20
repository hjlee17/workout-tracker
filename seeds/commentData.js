const { Comment } = require('../models');

const commentData = [
    {
        date_created: "10-10-2023",
        content: "Way to go!",
        user_id: 1,
        tile_id: 3,
    }, 
    {
        date_created: "10-10-2023",
        content: "Stay strong!",
        user_id: 1,
        tile_id: 5,
    }, 
    {
        date_created: "10-10-2023",
        content: "You've got this!",
        user_id: 2,
        tile_id: 1,
    }, 
    {
        date_created: "10-10-2023",
        content: "Don't give up!",
        user_id: 2,
        tile_id: 6,
    }, 
    {
        date_created: "10-10-2023",
        content: "Great job!",
        user_id: 3,
        tile_id: 2,
    }, 
    {
        date_created: "10-10-2023",
        content: "Almost there!",
        user_id: 3,
        tile_id: 4,
    }, 
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;