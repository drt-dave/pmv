const mongoose = require('mongoose')

const password = 'amonra2709'
const dbname = 'hr'
const uri =`mongodb+srv://drtdave:${password}@cluster0.myzreqo.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.set('strictQuery', true)

exports.mongoConnect = () => {
  mongoose.connect(uri)
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection
  dbConnection.on("error", console.error.bind(console, "MongoAtlasDB connection error"))
}
