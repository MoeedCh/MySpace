import styles from './NavMenu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { SignInButton } from './components/buttons';

export default function NavMenu() {
    return (
        <nav className={styles.nav}> 
            <Link href={'/'}>
                <Image 
                    src="/logo.svg" // Route of the image file
                    width={260}
                    height={300}
                    alt="MySpace Logo"
                />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>

                <li>
                    <Link href={'/blog'}>Blog</Link>
                </li>

                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
                
                <li>
                    <SignInButton />
                </li>
            </ul>

        </nav>
    );
}