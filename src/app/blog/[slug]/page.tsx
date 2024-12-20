'use client';

import { useEffect, useState } from 'react';

const BlogDetail = ({ params }: { params: { slug: string } }) => {
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      const response = await fetch(`/api/blog/${params.slug}`);
      const data = await response.json();
      setBlog(data);
      setLoading(false);
    };

    fetchBlogDetail();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetail;