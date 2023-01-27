import { Inter } from '@next/font/google';
import styles from '@styles/Home.module.css';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === 'loading') return <div>Loading</div>;

  // if (status === 'unauthenticated') return <div>Go to login</div>;

  return (
    <main className={styles.main}>
      <div className={styles.profile}>
        <span>{status}</span>
        {session?.user && (
          <>
            {session?.user?.image ? (
              <Image className={styles.profileImage} src={session?.user.image ?? 'no-image'} alt="Profile Image" width={100} height={100} />
            ) : (
              <span className={styles.profileImage}>No Profile Image</span>
            )}
            <span>{session?.user?.name}</span>
            <span>{session?.user?.email}</span>
          </>
        )}
      </div>

      <button className={styles.card} type="button" onClick={() => router.push('/setting')}>
        <h2 className={inter.className}>
          Setting <span>-&gt;</span>
        </h2>
        <p className={inter.className}>Go to Setting Page</p>
      </button>

      <button className={styles.card} type="button" onClick={() => router.push('/user')}>
        <h2 className={inter.className}>
          My Page <span>-&gt;</span>
        </h2>
        <p className={inter.className}>Go to My Page</p>
      </button>
    </main>
  );
}
