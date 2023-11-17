const sequelize = require('../config/connections');


const seedUsers = require('./userData');
const seedTiles = require('./tileData');
const seedTrackers = require('./trackerData');
const seedComments = require('./commentData');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log('\n----- Users Seeded -----\n');
  await seedTiles();
  console.log('\n----- Tiles Seeded -----\n');
  await seedTrackers();
  console.log('\n----- Trackers Seeded -----\n');
  await seedComments();
  console.log('\n----- Comments Seeded -----\n');

  process.exit(0);
};

seedDatabase();
