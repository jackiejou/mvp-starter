var Sequelize = require('sequelize');

const sequelize = new Sequelize('MVP', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Games = sequelize.define('games', {
  gameId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  deck: Sequelize.TEXT,
  image: Sequelize.STRING,
  url: Sequelize.STRING
});

Games.sync();

var selectAll = (callback) => {
  Games.findAll().then(games => {
    callback(null, games);
  });
};

let add = (game) => {
  return Games.findOrCreate({where: {gameId: game.id}, defaults:{name: game.name, deck: game.deck, image: game.image.icon_url, url: game.site_detail_url}})
    .then(() => {
      console.log('game added to db');
    }).catch(err => {
      console.log('db err', err);
    });
};

let del = (id) => {
  return Games.destroy({where: {gameID: id}, limit: 1})
    .then(() => {
      console.log('game removed');
    }).catch(err => {
      console.log('del err', err);
    });
};

module.exports.selectAll = selectAll;
module.exports.add = add;
module.exports.del = del;
