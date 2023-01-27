import { Inter } from '@next/font/google';
import styles from '@styles/Home.module.css';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

function UserPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') return <div>Loading...</div>;

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

      <h2>This is My Page</h2>

      <button className={styles.card} type="button" onClick={() => router.push('/')}>
        <h2 className={inter.className}>
          Home <span>-&gt;</span>
        </h2>
        <p className={inter.className}>Go to Home</p>
      </button>
      {status === 'authenticated' ? (
        <button className={styles.card} type="button" onClick={() => signOut()}>
          <h1 className={inter.className}>
            SignOut <span>🥹</span>
          </h1>
        </button>
      ) : (
        <button className={styles.card} type="button" onClick={() => router.push('/auth/login')}>
          <h1 className={inter.className}>
            SignIn <span>😝</span>
          </h1>
        </button>
      )}
    </main>
  );
}

export default UserPage;
