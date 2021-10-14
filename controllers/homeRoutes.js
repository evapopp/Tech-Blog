const router = require('express').Router();
const { Blog, User, Comment } = require('../models')
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
    res.render('homepage', { blog, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
    // Send the rendered Handlebars.js template back as the response

});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    console.log('hurray!')
    return;
  } 
  res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
  try{
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });
    const user = userData.get({ plain:true });
    res.render('dashboard', {
      ...user,
      logged_in: true,
    });
  } catch (err){
    res.status(500).json(err);
  }
})


router.get('/dashboard/:id', async (req, res) => {
  try {
    const contentData = await Blog.findByPk(req.params.id);

    const content = contentData.get({ plain: true });

    res.render('dashboard', {
      ...content,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;