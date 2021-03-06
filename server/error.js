const errorController = {
    _404 (req, res) {
        res.status(404).render('pages/error');
    },
    _500(err, req, res) {
        res.status(500).send(err.message);
    }
}

module.exports = errorController;