const knex = require("../config/database");
const csvTojson = require("csvtojson");


async function store_data(){

    try{

        let getData = await knex.select("*").from("salaries")
        if (getData.length == 0){
            let convertData = await csvTojson().fromFile("salary_data.csv")
            let count = 0;
            for(let obj of convertData){
                let insertData = {
                    "Timestamp":obj.Timestamp,
                    "Age":obj["How old are you?"],
                    "Industry":obj["What industry do you work in?"],
                    "Job_Title":obj["Job title"],
                    "Annual_Salary":obj["What is your annual salary?"],
                    "Currency":obj["Please indicate the currency"],
                    "Location":obj["Where are you located? (City/state/country)"],
                    "Experience":obj["How many years of post-college professional work experience do you have?"],
                    "Context":obj[ 'If your job title needs additional context, please clarify here:'],
                    "Other":obj['If "Other," please indicate the currency here:'],
                }
                await knex("salaries").insert(insertData)
                count++
                console.log(count);
            }
        }
    }catch(err){
        console.log(err.message);
    }
}


module.exports = store_data;