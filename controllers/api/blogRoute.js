const router = require('express').Router();
const { Blog } = require('../../models');

router.get('/', async (req, res) => {
  try {
      const blogData = await Blog.findAll(req.params.id);
      const blog = blogData.map((blog) => blog.get({ plain: true })
      );
      res.render('dashboard', { blog })
  } catch (err) {
      console.log(err)
      res.status(400).json(err);
  }  
});

router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id)
    const blog = blogData.get({ plain: true });
    console.log(blog)
    res.render('dashboard', { blog });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const blogPost = await Blog.create({...req.body, user_id: req.session.user_id});
    res.render('dashboard', {blog:blogPost});
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;