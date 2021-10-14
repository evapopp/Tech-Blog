const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const comment = await Comment.findAll();
        res.status(200).json(comment); 
    } catch (err){
        res.status(400).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const postComment = await Comment.create({
            comment: req.body.comment,
            user_id: req.body.user_id,
            blog_id: req.body.user_id,
        });
        res.status(200).json(postComment)
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;