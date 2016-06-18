// ----------------------------------------------
// Development  on Cloud9 Environmental Variables
// ----------------------------------------------

var port = process.env.PORT;
var ip = process.env.IP;
module.exports = {
	port: port,
	ip: ip,
	db: 'mongodb://localhost/dictate',
	facebook: {
		clientID: '513828288756645', //TODO: Change
		clientSecret: '2d7cc991efddb864e9af61f307980b9a', //TODO: Change
		callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'yFntGKkvMZkDKL47XGtzLNdRA', //TODO: Chane
		clientSecret: 'EAiPTjPYLX5nrkpRtxYQflbWpRTqqLwwBHRLh7WpdQ1P69Tre6', //TODO: Change
		callbackURL: 'http://localhost:'+ port +'/oauth/twitter/callback'
	}
};