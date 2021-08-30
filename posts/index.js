const express = require('express');
const { randomBytes } = require('crypto');
var cors = require('cors')

const app = express();
//?app.use
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//dummy posts just to get started
const posts = {};

//routes
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id, title
  }
  res.status(201).send(posts[id]);
});


//app listening on port 4000
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))