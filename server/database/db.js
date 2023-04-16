import mongoose from "mongoose"




 const Connection = async (username,password) => {
  const URL = `mongodb+srv://${username}:${password}@blog-app.lz0pvn1.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL,{useNewURLParser : true});
    console.log('Database connected sucesssfully')
  } catch (error){
    console.log('Error While Connecting With the datbase',error)
  }
}

export default Connection ;                                                           