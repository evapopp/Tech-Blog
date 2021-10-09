const sequelize = require('../config/connection');
const { Blog } = require('../models');

const seedtheblog = require('./blogData')

const blogData = require('./blog_data.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log(Test)
    console.log(Blog)
    await seedtheblog()
    // await sequelize.sync({ force: true });
    // console.log('blogdata', blogData)
    
    // const blogPost = await Blog.bulkCreate(blogData);

    // console.log(blogPost)
    // console.log('\n ---------- Blog Data Seeded! ---------- \n');
    process.exit(0);
};

seedDatabase();