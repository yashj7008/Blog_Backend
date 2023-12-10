import express from 'express'
import BlogRoutes from "./routes/blog.routes.js"
import connectToDB from "./config/dbConnection.js"
import {renderBlogs,renderBlogDetail} from "./controllers/blog.controller.js"



const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.get("/ping",(req, res)=>{
    res.status(200).send("server is up ! ");
})

app.get("/blogs", renderBlogs);
app.get('/blogs/:blogId', renderBlogDetail);

app.get("/blog:", renderBlogs);
app.use("/api/blog", BlogRoutes);

app.all( "*", (req, res)=>{
    res.status(404).send("Page not found !");
})

app.listen(5030, async()=>{
    await connectToDB()
    console.log(`server is running on the http://localhost:5030/`)
})