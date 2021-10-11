const sequelize = require('../config/connection');
const { Blog, User } = require('../models');

const blogData = require('./blog_data.json');
const userData = require('./user_data.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const seedUserData = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n ---------- User Data Seeded! ---------- \n');

    const seedBlogData = await Blog.bulkCreate(blogData);
    console.log('\n ---------- Blog Data Seeded! ---------- \n');

    process.exit(0);
};

seedDatabase();