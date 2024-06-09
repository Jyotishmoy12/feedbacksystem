import mongoose from "mongoose";

type conncetionObject={
    isConnected?: number
}

const connection: conncetionObject={
    
}

async function dbConnect():Promise<void>{
  if(connection.isConnected){
    console.log("Already connceted to database");
    return;
  }
  try {
   const db = await mongoose.connect(process.env.MONGODB_URI || '' ,{})
   connection.isConnected = db.connections[0].readyState
   
   console.log("DB connection established")
  } catch (error) {

    console.log("Error connecting to Mongo", error);
    process.exit()

    
  }
}

export default dbConnect