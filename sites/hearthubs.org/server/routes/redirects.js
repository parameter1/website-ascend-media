module.exports = (app) => {
  app.get('/bcvs/:path', (req, res) => {
    const to = `https://bcvs.hub.heart.org/${req.params.path}`;
    res.redirect(301, to);
  });
  app.get('/vascular/:path', (req, res) => {
    const to = `https://vasculardiscovery.hub.heart.org/${req.params.path}`;
    res.redirect(301, to);
  });
  app.get('/hypertension/:path', (req, res) => {
    const to = `https://hypertension.hub.heart.org/${req.params.path}`;
    res.redirect(301, to);
  });
  app.get('/qcor/:path', (req, res) => {
    const to = `https://qcor.hub.heart.org/${req.params.path}`;
    res.redirect(301, to);
  });
  app.get('/bcvs', (req, res) => {
    const to = 'https://bcvs.hub.heart.org';
    res.redirect(301, to);
  });
  app.get('/vascular', (req, res) => {
    const to = 'https://vasculardiscovery.hub.heart.org';
    res.redirect(301, to);
  });
  app.get('/hypertension', (req, res) => {
    const to = 'https://hypertension.hub.heart.org';
    res.redirect(301, to);
  });
  app.get('/qcor', (req, res) => {
    const to = 'https://qcor.hub.heart.org/';
    res.redirect(301, to);
  });
};
