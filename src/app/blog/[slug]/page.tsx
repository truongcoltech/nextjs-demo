'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { Blog } from "../../types/blogTypes"; // Import the Blog interface

import styles from './BlogDetail.module.css'; // Import CSS module

const BlogDetail = () => {
    const params = useParams();
    const slug = params?.slug;

    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        const fetchBlog = async () => {
            try {
                const response = await fetch(`/api/blog/${slug}`);
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (!blog) {
        return <div className={styles.error}>Blog not found.</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.body}>{blog.body}</p>
        </div>
    );
};

export default BlogDetail;
