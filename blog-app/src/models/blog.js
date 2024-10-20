import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Blog = mongoose.models.Blog || mongoose.model('blog', BlogSchema);

export default Blog;
