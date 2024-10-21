import BlogOverview from '@/components/blog-overview';

const fetchListOfBlogs = async () => {
  try {
    const apiResponse = await fetch('http://localhost:3000/api/get-blogs', {
      method: 'GET',
      cache: 'no-store',
    });

    const result = await apiResponse.json();

    return result?.data;
  } catch (error) {
    throw new Error(error);
  }
}

async function Blogs() {
  const blogList = await fetchListOfBlogs();

  return <BlogOverview blogList={blogList} />;
}

export default Blogs;
