// -----------------------------------------
// ROUTE: Exercise Name (for signed-in user)
// -----------------------------------------

module.exports = function(app) {
    app.get("/:id/exercises/:exerciseName", function(req, res) {
        var exerciseName = req.params.exerciseName;
        // Set requested variable equal to value in exercise.ejs
        res.render("id_exercises_exerciseName", {exercise: exerciseName});
    });
}