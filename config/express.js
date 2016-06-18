// --------------------------------------
// Configuration Dependencies for Express
// --------------------------------------
var bodyParser = require('body-parser')
  , compression = require('compression')
  , express = require('express')
  , flash = require('connect-flash')
  , morgan = require('morgan')
  , passport = require('passport')
  , path = require('path')
  , session = require('express-session');

var config = require(path.join(__dirname, '/config')); 

module.exports = function() {
	var app = express();
	
	if (process.env.NODE_ENV.substr(0, 10) === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compression);
	}

    app.use(bodyParser.urlencoded({
        extended: true
    }));
	app.use(bodyParser.json());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
	
	app.set('views', path.join(__dirname, '..', '/app/views/')); // Tells where to look for .ejs files
    app.set("view engine", "ejs");
    app.engine('.html', require('ejs').renderFile); // Not strictly needed, but ok

    app.use(flash()); // Just stores messages in the session and deletes them when shown to user
    app.use(passport.initialize());
    app.use(passport.session());
    
    // Require route for server
    require(path.join(__dirname, '..', '/app/routes/index.express.routes.js'))(app);
    require(path.join(__dirname, '..', '/app/routes/users.express.routes.js'))(app);
	
	// Important to serve static files after routes
    app.use(express.static(path.join(__dirname, '..', '/public')));
    
    return app;
};