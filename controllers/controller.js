const knex = require("../config/database");

const getAllData = (req, res) => {
  console.log('heee');
  const sort = req.query.sort || "Job_Title";
  const order = req.query.order || "asc";
  const currency = req.query.currency;

  const where = {};
  if (currency) {
    where.currency = currency;
  }

  knex("salaries")
    .where(where)
    .orderBy(sort, order)
    .then((data) => {
        if(data.length == 0){
            res.send({"status":"error","message":"database is empty..."})
        }else{
            res.send({"status":"success","count":data.length,'data':data})
        }
    }).catch((err)=>{
      console.log(err);
    });
};

const get_data_by_id = (req, res) => {
  let Id = req.params.id;
  console.log(Id);
  knex("salaries")
    .where("id", Id)
    .then((data) => {
      if (data.length == 0) {
        res.send({ status: "error", message: "id not found..." });
      } else {
        res.send({ status: "success", count: data.length, data: data });
      }
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

module.exports = { getAllData, get_data_by_id };
