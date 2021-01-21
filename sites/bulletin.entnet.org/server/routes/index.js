const home = require('./home');
const content = require('./content');
const magazine = require('./magazine');

module.exports = (app) => {
  // Homepage
  home(app);

  // Content Pages
  magazine(app);

  // Content Pages
  content(app);
};
