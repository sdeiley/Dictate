// --------------------------------------
// Configuration Dependencies for Express
// --------------------------------------
var path = require('path')
  , config = require(path.join(__dirname, '..', '/config/config'))
  , express = require('express')
  , bodyParser = require('body-parser')
  , passport = require('passport')
  , flash = require('connect-flash')
  , session = require('express-session');

module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: "ThereIsNoReasonToBeAliveIfYouCannotDeadlift"
    }));
    
    app.set('/views', path.join(__dirname, '/views/')); // Tells where to look for .ejs files
    app.set("view engine", "ejs");
    app.engine('.html', require('ejs').renderFile); // Not strictly needed, but ok

    app.use(flash()); // Just stores messages in the session and deletes them when shown to user
    app.use(passport.initialize());
    app.use(passport.session());
    
    // Require route for server
    require(path.join(__dirname, '..', '/routes/index.server.routes.js'))(app);
    require(path.join(__dirname, '..', '/routes/users.server.routes.js'))(app);
    
    app.use(express.static(path.join(__dirname, '..', '/public')));
    
    return app;
};