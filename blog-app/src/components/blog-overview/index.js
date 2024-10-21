'use client';
import { useEffect, useState } from 'react';
import AddNewBlog from '../add-new-blog';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { Label } from '../ui/label';

const initialBlogFormData = {
  title: '',
  description: '',
};

function BlogOverview({ blogList }) {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [currentEditBlogID, setCurrentEditBlogID] = useState(null);

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  const handleSaveBlogData = async () => {
    try {
      setLoading(true);
      const apiResponse =
        currentEditBlogID !== null
          ? await fetch(`/api/update-blog?id=${currentEditBlogID}`, {
              method: 'PUT',
              body: JSON.stringify(blogFormData),
            })
          : await fetch('/api/add-blog', {
              method: 'POST',
              body: JSON.stringify(blogFormData),
            });
      const result = await apiResponse.json();
      if (result?.success) {
        setBlogFormData(initialBlogFormData);
        setOpenBlogDialog(false);
        setCurrentEditBlogID(null);
        setLoading(false);

        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  };

  const handleDeleteBlogByID = async (getCurrentId) => {
    try {
      const apiResponse = await fetch(`/api/delete-blog?id=${getCurrentId}`, {
        method: 'DELETE',
      });

      const result = await apiResponse.json();

      if (result?.success) router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (getCurrentBlog) => {
    setCurrentEditBlogID(getCurrentBlog?._id);
    setBlogFormData({
      title: getCurrentBlog?.title,
      description: getCurrentBlog?.description,
    });
    setOpenBlogDialog(true);
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
        currentEditBlogID={currentEditBlogID}
        setCurrentEditBlogID={setCurrentEditBlogID}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blogList && blogList.length > 0 ? (
          blogList.map((blogItem, key) => (
            <Card className="p-5" key={key}>
              <CardContent>
                <CardTitle className="mb-5">{blogItem?.title}</CardTitle>
                <CardDescription>{blogItem?.description}</CardDescription>
                <div className="mt-5 flex gap-5  items-center">
                  <Button onClick={() => handleEdit(blogItem)}>Edit</Button>
                  <Button onClick={() => handleDeleteBlogByID(blogItem._id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Label className="text-3xl font-extrabold">
            No Blog found! Please add one
          </Label>
        )}
      </div>
    </div>
  );
}

export default BlogOverview;
