const mongoDb = require('mongodb');
const MongoClient = mongoDb.MongoClient;

let _db;

const mongoConnect = (callback)=>{

  MongoClient.connect('mongodb+srv://surya_pratap:y8aKvf0vlDquDUBA@cluster0.t0p5yri.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client=>{
    console.log('connected');
    _db = client.db();  // storing the databse connection
    callback();
  })
  .catch(err=>{
    console.log('err ing mongodb connect ',err);
    throw err;
  })
}

const getDb = () =>{
  if(_db)
  return _db;
  else throw 'no databse found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
