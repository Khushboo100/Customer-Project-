import mongoose from "mongoose"

const Connection = async(username,password) => {
    // I have not pasted  
    // PROJECT 0
    // here because there is no My first database
    const URL = `mongodb+srv://${username}:${password}@cluster0.ujmm16g.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology:true, useNewUrlParser:true})
        console.log('data base connected successfully');
    }catch(error){
        console.log('Error while connecting with data base',error)
    }
    
}

export default Connection;