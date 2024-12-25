import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string;
      name?: string;
      email?: string;
      token?: string;
    };
    csrfToken: string;
  }

  interface User extends User {
    id: string;
    name: string;
    email: string;
    token: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    name: string;
    email: string;
    token: string;
  }
}
