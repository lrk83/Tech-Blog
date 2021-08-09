const { Post } = require('../models')

const postData = [
    {
        title: 'First Post',
        post_text: 'This is my first post',
        user_id: '1'
    },
    {
        title: 'Second Post',
        post_text: 'This is my second post',
        user_id: '2'
    },
    {
        title: 'Third Post',
        post_text: 'This is my third post',
        user_id: '3'
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;