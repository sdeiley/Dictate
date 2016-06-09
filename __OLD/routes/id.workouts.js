// ---------------
// ROUTE: Workouts
// ---------------

/* This page will show a user
 * their list of workouts.
 */

module.exports = function(app) {
    app.get("/:id/workouts", function(req, res){
        // TODO: Develop workout page
        var id = req.params.id;
        res.send("Hello " + id + ". Here are your workouts");
    });
}