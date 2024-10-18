'use client';
import { useState } from 'react';
import AddNewBlog from '../add-new-blog';

const initialBlogFormData = {
  title: '',
  description: '',
};

function BlogOverview() {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);


  return (
    <AddNewBlog
      openBlogDialog={openBlogDialog}
      setOpenBlogDialog={setOpenBlogDialog}
    />
  );
}

export default BlogOverview;
