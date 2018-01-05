var Sequelize = require('sequelize');

const sequelize = new Sequelize('MVP', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Games = sequelize.define('games', {
  gameId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  deck: Sequelize.TEXT,
  image: Sequelize.STRING
});

Games.sync();

var selectAll = function(callback) {
  Games.findAll().then(games => {
    callback(null, games);
  });
};

let add = (game) => {
  return Games.findOrCreate({where: {gameId: game.id}, defaults:{name: game.name, deck: game.deck, image: game.image.icon_url}})
    .then(() => {
      console.log('game added to db');
    }).catch(err => {
      console.log('db err', err);
    });
};

module.exports.selectAll = selectAll;
module.exports.add = add;
