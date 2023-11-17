const { User } = require('../models');

const userData = [
    {
        first_name: "Megan",
        last_name: "Sargent",
        date_of_birth: "10-06-2000",
        email: "megan@sargent.com",
        password: "melon"
    },
    {
        first_name: "Ben",
        last_name: "Rodriguez-Moran",
        date_of_birth: "08-22-2003",
        email: "ben@rodriguez.com",
        password: "melon"
    },
    {
        first_name: "Becca",
        last_name: "Lee",
        date_of_birth: "05-10-1990",
        email: "becca@lee.com",
        password: "melon"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;