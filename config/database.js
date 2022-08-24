
require('dotenv').config()




const knex = require("knex")({
  client: process.env.DBCLIENT,
  connection: {
    user:process.env.DBUSER,
    host: process.env.DBHOST,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    port:process.env.DBPORT
  }
});

knex.schema.hasTable("salaries").then(function (exists) {
  if (!exists) {
    return knex.schema
      .createTable("salaries", function (table) {
        table.increments("id");
        table.string("Timestamp").notNullable();
        table.string("Age").notNullable();
        table.string("Industry").notNullable();
        table.string("Job_Title").notNullable();
        table.string("Annual_Salary").notNullable();
        table.string("Currency").notNullable();
        table.text("Location").notNullable();
        table.string("Experience").notNullable();
        table.text("Context").notNullable();
        table.string("Other").notNullable();
        
      })
      .then((data) => {
        console.log("Table Created......");
      })
      .catch((err) => {
        console.log("error while creating table.....", err);
      });
  }
});

module.exports = knex;