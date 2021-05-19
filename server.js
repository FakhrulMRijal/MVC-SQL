const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const postsRoutes = require('./routes/posts');
const usersRoutes = require("./routes/users");
const imageUploadsRoutes = require("./routes/imageUploads");
const PORT = process.env.PORT || 3200;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// app.use('/api/v1', (req, res) => {
//     res.send("Hello Wor;d!");
// });

app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/images', imageUploadsRoutes);

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})