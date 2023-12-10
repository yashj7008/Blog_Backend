import mongoose from "mongoose";

const connectToDB = async () =>{
    console.log(`mongodb+srv://user:${process.env.DATABASE_PASSWORD}@cluster.cz9iicw.mongodb.net/?retryWrites=true&w=majority`)
    const {connection} = await mongoose.connect(
        `mongodb+srv://user:hJwCZOQluVfpNI9n@cluster.cz9iicw.mongodb.net/user_db?retryWrites=true&w=majority`
    )

    if(connection){
        console.log(`Database connected to the db : ${connection.host}`)
    }
}

export default connectToDB