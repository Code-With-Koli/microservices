const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors')

const app = express();
app.use(cors())

const commentsByPostID = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostID[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostID[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostID[req.params.id] = comments;

  res.status(201).send(comments);
});



//app listening on port

const PORT = process.env.PORT || 8001
app.listen(PORT, () => console.log(`listening on port ${PORT}`))