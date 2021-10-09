const { Blog } = require('../models')

const theBlogData = [
    {
      "post_title": "test",
      "contents": "this is a test",
      "author": "your mom",
      "date": "1/22/29"
    },
    {
        "post_title": "test2",
        "contents": "this is a test2",
        "author": "your mom again",
        "date": "2/22/29"
    },
    {
        "post_title": "test3",
        "contents": "this is a test3",
        "author": "still your mom",
        "date": "3/22/29"
    }
]

const seedBlog = () => Blog.bulkCreate(theBlogData);

module.exports = seedBlog;