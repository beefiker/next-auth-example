import 'next-auth';

import 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    id: number;
    accessToken: string;
    refreshToken: string;
  }

  interface Session {
    user: User;
    expires: number;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** Storing Tokens */
    accessToken: string;
    refreshToken: string;
  }
}
