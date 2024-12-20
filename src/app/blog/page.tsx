// app/blog/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blogs from the API
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.slug}`}>
              <h2>{blog.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
