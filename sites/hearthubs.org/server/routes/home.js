module.exports = (app) => {
  app.get('/', (_, res) => res.redirect(302, '/vascular'));
};
