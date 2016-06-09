// --------------
// ROUTE: Profile
// --------------

/* This is the profile page.
 * Displays picture, information
 * about the user, (like estimated
 * powerlifting total), workouts
 * logged, exercises performed (unique
 * or total), goals?, and more, if desired.
 */

module.exports = function(app) {

    // Basic routes for testing
    app.get("/:id/profile", function(req, res){
        // TODO: Develop profile page
        var id = req.params.id;
        res.send("Hello " + id + "Welcome to the profile page.");
    });
}