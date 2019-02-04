var express = require("express");
var router = express.Router();
var donut = require("../models/donut.js");

router.get("/", function(req, res) {
    donut.selectAll(function (data) {
      res.render("index", {donuts: data});
    });
  });

router.post("/", function(req, res) {
    console.log(req.body.donutName);
    donut.insertOne(
        ["donut_name", "devoured"],
        [req.body.donutName, false],
        function() {
        res.redirect("/");
    });
});

router.put("/", function(req, res) {
    var condition = "id = " + req.body.id;
    donut.updateOne(
      {
        devoured: true
      },
      condition,
      function () {
        res.redirect("/");
      }
    );
});

router.delete("/", function(req, res) {
    var condition = "id = " + req.body.deleteId;
    donut.deleteOne(
      condition,
      function () {
        res.redirect("/");
      }
    );
});

// Export routes for server.js to use.
module.exports = router;
