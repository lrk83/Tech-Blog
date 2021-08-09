const { User } = require('../models')

const userData = [
    {
        username: 'lrk83',
        password: 'password1234'
    },
    {
        username: 'lrk84',
        password: 'password1234'
    },
    {
        username: 'lrk85',
        password: 'password1234'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;