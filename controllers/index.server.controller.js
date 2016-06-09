// -----------------
// Server Controllor
// -----------------

exports.render = function(req, res) {
    res.render('index', {
        title: "Dictate Lifting",
        user: req.user ? req.user.username : ''
    });
};