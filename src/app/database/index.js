import mongoose from "mongoose";


export function db() {
  function connect() {
    return mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{
      console.log("conected to mongodb");
    }).catch(error => {
      console.log("mongo error",error);
    });
  }

  return { connect };
}
