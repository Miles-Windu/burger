// requiring connection to the database
var connection = require("./connection.js");

// saving the orm functions in a variable to export to other files
var orm = {

    // this function will select all from the burger table in the burgers_db
    selectAll: function(callback){
        connection.query("SELECT * FROM burgers_db.burger", function(err, results){
            if (err) {
                throw err
            }
           callback(results)
        })
    }, 

    //==================================================================
    // this function will select the burger fom the input field and add it to the database
    insertOne: function(burger, callback){
        connection.query("INSERT INTO burger (burger_name) VALUES ?", [burger.burger_name], function(err, results){
            if (err){
                throw err
            }
            callback(results); 
        })
    },

    //==================================================================
    // this function will update the burger's boolean value to represent whether the burger has been eaten or not
    updateOne: function(burger, callback){
        connection.query("UPDATE ? WHERE ?")

    }
},


module.exports = orm

    
