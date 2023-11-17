const User = require('./User');
const Tile = require('./User');
const Comment = require('./User');
const TrackerStatus = require('./TrackerStatus');


// user model associations
User.hasMany(Tile, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE', // when user is deleted, their tiles are deleted
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE', // when user is deleted, their comments are deleted
});



// tile model associations
Tile.belongsTo(User, {
    foreignKey: 'user_id'
});

Tile.hasMany(Comment, {
    foreignKey: 'tile_id',
    onDelete: 'CASCADE', // when tile is deleted, corresponding comments are deleted
});


Tile.hasOne(TrackerStatus, {
    foreignKey: 'tile_id'
});


// comment model associations
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Tile, {
    foreignKey: 'tile_id'
});


// trackerstatus model associations
TrackerStatus.belongsTo(Tile, {
    foreignKey: 'user_id'
});

module.exports = { User, Tile, Comment, TrackerStatus };
