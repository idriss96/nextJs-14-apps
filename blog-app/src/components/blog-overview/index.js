'use client';
import { useState } from 'react';
import AddNewBlog from '../add-new-blog';

const initialBlogFormData = {
  title: '',
  description: '',
};

function BlogOverview() {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

  console.log(blogFormData);
  

  return (
    <AddNewBlog
      openBlogDialog={openBlogDialog}
      setOpenBlogDialog={setOpenBlogDialog}
      loading={loading}
      setLoading={setLoading}
      blogFormData={blogFormData}
      setBlogFormData={setBlogFormData}
    />
  );
}

export default BlogOverview;
