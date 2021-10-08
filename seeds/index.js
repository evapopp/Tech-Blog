const sequelize = require('../config/connection');
const { Blog } = require('../models');

const blogData = require('./blog_data.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const blogPost = await Blog.bulkCreate(blogData);
    console.log('\n ---------- Blog Data Seeded! ---------- \n');
    process.exit(0);
};

seedDatabase();