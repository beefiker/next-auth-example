import styles from '@styles/Home.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';

function LoginPage() {
  const { data: session, status } = useSession();

  const router = useRouter();

  const [showError, setShowError] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: 'test',
    password: '1234',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setShowError(false);

    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    if (res?.ok && res.status === 200) {
      router.replace('/');
    }

    if (res?.error) {
      setShowError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShowError(false);
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (status === 'authenticated') router.replace('/');
  }, [router, status]);

  return (
    <main className={styles.main}>
      <div>
        <h2>This is Login Page</h2>
      </div>
      <div className={styles.card}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user-email">
            <span>ID</span>
            <input
              type="text"
              name="email"
              id="user-email"
              value={userInfo.email}
              placeholder="beefiker@gmail.com"
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor="user-password">
            <span>PW</span>
            <input type="password" name="password" id="user-password" value={userInfo.password} onChange={(e) => handleChange(e)} />
          </label>
          {showError && (
            <>
              <p>Failed to login.</p>
              <p>test account is test / 1234</p>
            </>
          )}
          <input type="submit" value="Sign In" disabled={showError} />
        </form>
      </div>
      <div />
    </main>
  );
}

export default LoginPage;
