const express = require('express');
const app = express();

app.use(express.static('/public'));

app.listen(8000, (req, res) => {
    console.log("Server has started on port 8000");
});