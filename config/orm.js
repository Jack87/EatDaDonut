// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
};

  // Helper function for SQL syntax.
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      if (Object.hasOwnProperty.call(ob, key)) {
        arr.push(key + "=" + ob[key]);
      }
    }
    return arr.toString();
};

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + " (";
            queryString += cols.toString();
            queryString += ") VALUES (";
            queryString += printQuestionMarks(vals.length) + ") ";
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
            queryString += " WHERE " + condition;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object for the model (donut.js).
module.exports = orm;
