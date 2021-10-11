const router = require('express').Router();
const { Blog, User } = require('../models')
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes:['name'], 
        },
      ],
    });
    const blog = blogData.map((blog) => blog.get({ plain: true })
    );
    console.log(blog)
    res.render('homepage', { blog });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
    // Send the rendered Handlebars.js template back as the response

});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   // res.redirect('/profile');
  //   console.log('hurray!')
  //   return;
  // }

  res.render('login');
});


// router.get('/dash/:id', async (req, res) => {
//   try {
//     const projectData = await Blog.findByPk(req.params.id);

//     const project = projectData.get({ plain: true });

//     res.render('dashboard', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;