import express from 'express';
import Comment from '../models/comment';

const router = express.Router();

router.get('/', (req, res) => {
  Comment.find().then((data) => {
    res.send(data);
  });
});

router.post('/', (req, res) => {
      const { username, selection, response } = req.body;
      const newComment = new Comment({
        username:username,
        content:response,
        excerption:selection
      });
      newComment.save()
        .then((data) => res.json({ success: true,data }))
        .catch(err => res.status(500).json({ error: err }));

});

router.delete('/', (req, res) => {
  Comment.remove()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }));
});

export default router;
