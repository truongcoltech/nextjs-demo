// // app/api/blogs/route.ts
// import { NextResponse } from 'next/server';

import { NextResponse } from "next/server";

// Function to generate a slug from a title
const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
  };


export async function GET() {
    try {
        // Fetch random blog posts from an external API (JSONPlaceholder)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        // Return the list of blog posts

        const postsWithSlugs = posts.map((post: { title: string }) => {
            return {
                ...post,
                slug: generateSlug(post.title)
            }
        });

        return NextResponse.json(postsWithSlugs);
    }
    catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json(
            { message: 'There was an error fetching the blogs.' },
            { status: 500 }
        );
    }
}
