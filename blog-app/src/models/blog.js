import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: string,
  description: string,
});

const Blog = mongoose.models.Blog || mongoose.model('blog', BlogSchema);

export default Blog;
