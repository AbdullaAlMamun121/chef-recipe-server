const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefInfo = require('./data/chef-info.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send("chef server is running")
})

app.get('/chef', (req, res) => {
    res.send(chefInfo);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const chefFound = chefInfo.find(n =>n.id == id);
    res.send(chefFound);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port} `);
})