import Image from 'next/image'
import styles from './page.module.css'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/dist/server/api-utils';
 
export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    return <p> You need to be logged in.....</p>
  }

  return (
    <main >
     
    </main>
  )
}
