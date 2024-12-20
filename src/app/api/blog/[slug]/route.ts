import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({ message: 'Slug is missing' }, { status: 400 });
  }

  try {
    // Fetch the blog post using the slug
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    
    if (!response.ok) {
      return NextResponse.json(
        { message: 'Blog post not found' },
        { status: response.status }
      );
    }

    const post = await response.json();

    // Return the blog post as JSON
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { message: 'Error fetching blog post' },
      { status: 500 }
    );
  }
}
