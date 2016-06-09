// ---------------------------------
// ROUTE: Exercises Page (logged in)
// ---------------------------------

module.exports = function(app) {
    app.get("/:id/exercises", function(req, res) {
        var id = req.params.id;
        // TODO: Develop Exercise selection page
        res.send("Exercise Page");
    });
}