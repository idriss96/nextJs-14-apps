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

  const handleSaveBlogData = async () => {
    try {
      const apiResponse = await fetch('/api/add-blog', {
        method: 'POST',
        body: JSON.stringify(blogFormData),
      });

      const result = await apiResponse.json();
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  };

  return (
    <AddNewBlog
      openBlogDialog={openBlogDialog}
      setOpenBlogDialog={setOpenBlogDialog}
      loading={loading}
      setLoading={setLoading}
      blogFormData={blogFormData}
      setBlogFormData={setBlogFormData}
      handleSaveBlogData={handleSaveBlogData}
    />
  );
}

export default BlogOverview;
