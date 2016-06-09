// ---------------
// ROUTE: Workouts
// ---------------

/* This page will show a user
 * their list of workouts.
 */

module.exports = function(app) {
    app.get("/:id/workouts/:date", function(req, res){
        // TODO: Develop page to display a workout
        var id = req.params.id;
        var date = req.params.date;
        res.send("Workout " + date);
    });
}