const express = require('express');
const bodyParser = require('body-parser');
const key = require('../config.js');
const db = require('../database-mysql');
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/search', (req, res) => {
  axios(`https://www.giantbomb.com/api/search/?api_key=${key}&format=json&query=${req.body['term']}&resources=game&field_list=id,name,deck,image,platforms,site_detail_url,original_release_date`)
  .then((response) => {
    res.json(response.data.results);
  })
  .catch((error) => {
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
  db.add(req.body['game'])
    .then(() => {
      res.redirect('/games');
    })
});

app.delete('/games', (req, res) => {
  db.del(req.body['game'])
    .then(() => {
      db.selectAll((err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json(data);
        }
      });
    });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
