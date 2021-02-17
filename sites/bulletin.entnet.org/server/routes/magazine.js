const { withMagazineIssue, withMagazinePublication } = require('@parameter1/base-cms-marko-web/middleware');
const index = require('@ascend-media/package-bulletin/templates/magazine');
const publication = require('@ascend-media/package-bulletin/templates/magazine/publication');
const publicationFragment = require('@ascend-media/package-bulletin/graphql/fragments/magazine-publication-page');
const issue = require('@ascend-media/package-bulletin/templates/magazine/issue');
const issueFragment = require('@ascend-media/package-bulletin/graphql/fragments/magazine-issue-page');

module.exports = (app) => {
  app.get('/books/:alias([a-zA-Z0-9-_/]+)', (req, res) => {
    const { alias } = req.params;
    res.redirect(301, `https://bulletin-books.ascendmedia.com/${alias}/index.html`);
  });

  app.get('/magazine', (res) => {
    res.marko(index);
  });

  app.get('/magazine/:id([a-fA-F0-9]{24})', withMagazinePublication({
    template: publication,
    queryFragment: publicationFragment,
  }));

  app.get('/magazine/48620', (req, res) => {
    const to = 'https://bulletin-books.ascendmedia.com/2021-january-aao-hns-bulletin-special-edition/index.html';
    res.redirect(301, to);
  });

  app.get('/magazine/:id(\\d+)', withMagazineIssue({
    template: issue,
    queryFragment: issueFragment,
  }));
};
