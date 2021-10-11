const router = require('express').Router();
const Blog = require('../models')


router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('homepage');
  });

// router.get('/login', async (req, res) => {
//     try{
//         const blogdataaaa = await Blog.findAll()
//         res.status(200).json(blogdataaaa)
//         res.render('main');
        

//     } catch (err) {
//         res.status(500).json(err);
//     }
// })


module.exports = router;