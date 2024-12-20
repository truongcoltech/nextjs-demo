'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from './BlogList.module.css'; // Import CSS module

import { Blog } from "../types/blogTypes"; // Import the Blog interface

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/api/blogs');
            const data = await response.json();
            setBlogs(data);
            setLoading(false);
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Blog Posts</h1>
            <ul className={styles.blogList}>
                {blogs.map((blog: Blog) => (
                    <li key={blog.id} className={styles.blogItem}>
                        <Link href={`/blog/${blog.id}`}>
                            <h2 className={styles.blogTitle}>{blog.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
