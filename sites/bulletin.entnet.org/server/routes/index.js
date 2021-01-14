const loadInquiry = require('@base-cms/marko-web-inquiry');
const home = require('./home');
const content = require('./content');
const magazine = require('./magazine');
const dynamicPages = require('./dynamic-page');
const search = require('./search');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);

  // Homepage
  home(app);

  // Content Pages
  magazine(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
