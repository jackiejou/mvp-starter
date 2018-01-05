const express = require('express');
const bodyParser = require('body-parser');
// const igdb = require('igdb-api-node').default;
const key = require('../config.js');
// const client = igdb(key);
const db = require('../database-mysql');
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/search', (req, res) => {
  axios(`https://www.giantbomb.com/api/search/?api_key=${key}&format=json&query=${req.body['term']}&resources=game&field_list=id,name,deck,image`)
  .then(function (response) {
    res.json(response.data.results);
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.get('/games', (req, res) => {
  db.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/games', (req, res) => {
  // console.log(req.body);
  db.add(req.body['game'])
  .then(() => {
    res.redirect('/games');
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
