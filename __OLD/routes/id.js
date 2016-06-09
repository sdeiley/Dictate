// ---------------------
// ROUTE: Signed-in Page
// ---------------------

/* This page will serve as the home screen for
 * for a signed in user.  From here, they can
 * navigate to their workouts page (to view past
 * workouts), exercise page (to view list of
 * exercises performed) and profile page.
 */

module.exports = function(app) {

    // Basic routes for testing
    app.get("/:id", function(req, res){
        // TODO: Develop home page once signed in
        var id = req.params.id;
        res.send("Hello " + id);
    });
}