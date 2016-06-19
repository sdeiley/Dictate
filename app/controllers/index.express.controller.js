// -----------------
// Server Controllor
// -----------------

'use strict';

exports.render = function (req, res) {
	// Session use example
	if (req.session.lastLogin) {
		console.log(req.session.lastVisit);
	}
	req.session.lastVisit = new Date();

    res.render('index', {
        title: "Dictate Lifting",
        user: req.user ? req.user.username : ''
    });
};