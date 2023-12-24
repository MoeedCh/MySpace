
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'We are a social media',
  }

export default async function About() {
    return (
        <main>
            <h1>About</h1>
            <p>
                We are a social media platform that allows you to connect with your friends and family.
            </p>
        </main>
    );
}