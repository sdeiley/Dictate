// -----------
// ROUTE: Main
// -----------
var passport = require('passport');

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render('main.ejs');
    });
    
/*  app.post("/",
        passport.authenticate('local', { 
            successRedirect: '/id',
            failureRedirect: '/',
            failureFlash: true
        })
    );
*/
};