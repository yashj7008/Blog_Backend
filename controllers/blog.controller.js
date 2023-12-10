import Blog from "../models/blog.model.js";

const getAllBlogs = async (req, res)=>{
    try{
        const data = await Blog.find();
        res.status(200).send(data)
    }
    catch(e){
       res.status(503).send(e)
    }

}

const createBlog = async (req, res)=>{
    const blogData = req.body;

    try{
        const data = await Blog.create(blogData);
        res.status(200).send(data)
    }
    catch(e){
       res.status(503).send(e)
    }

}
const getBlogDetail = async (req, res)=>{
    const {blogId} = req.params;

    try{
        const data = await Blog.findById(blogId);
        res.status(200).send(data)
    }
    catch(e){
       res.status(503).send(e)
    }

}

 const renderBlogs = async (req, res) => {
    const blogs = await Blog.find();
    res.render('blogList', {blogs});
}

const renderBlogDetail = async (req, res) => {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    console.log(blog);
    res.render('blogDetail', {blog});
}
export {getAllBlogs ,createBlog, getBlogDetail, renderBlogs, renderBlogDetail}