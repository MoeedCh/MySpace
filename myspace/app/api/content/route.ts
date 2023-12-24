import { NextResponse } from 'next/server';

// Dummy data
const posts = [
    {
        title: 'Lorem Ipsum',
        slug: 'lorem-ipsum',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
        title: 'Sample Post',
        slug: 'sample-post',
        content: 'This is a sample post.',
    },
    {
        title: 'Hello World',
        slug: 'hello-world',
        content: 'Hello, world!',
    },
    {
        title: 'Code Snippets',
        slug: 'code-snippets',
        content: 'Here are some useful code snippets.',
    },
    {
        title: 'My Blog',
        slug: 'my-blog',
        content: 'Welcome to my blog!',
    },
];

export async function GET() {
  return NextResponse.json(posts);
}