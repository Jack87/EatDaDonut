var orm = require("../config/orm.js");

var donut = {
    all: function(cb) {
      orm.selectAll("donuts", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.insertOne("donuts", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.updateOne("donuts", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.deleteOne("donuts", condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (donuts_controller.js).
  module.exports = donut;