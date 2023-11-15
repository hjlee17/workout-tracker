const User = require('./User');
const Tile = require('./User');
const Comment = require('./User');


// user model associations
User.hasMany(Tile, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE', // when user is deleted, their tiles are deleted
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE', // when user is deleted, their comments are deleted
});


// post model associations
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'tile_id',
    onDelete: 'CASCADE', // when tile is deleted, corresponding comments are deleted
});


// comment model associations
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Tile, {
    foreignKey: 'tile_id'
});


module.exports = { User, Tile, Comment };
