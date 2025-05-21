'use client';

import { ReactNode, useEffect } from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { useAuth } from '../stores/use-auth-store';

interface Props {
  children: ReactNode;
  session?: Session | null;
}

function AuthSessionProvider({ children, session }: Props) {
  const { setToken, setUserId } = useAuth();

  useEffect(() => {
    // if (session?.accessToken) setToken(session.accessToken);
    // if (session?.user?.id) setUserId(session.user.id);
  }, [setToken, setUserId, session]);

  return (
    <SessionProvider session={session} refetchOnWindowFocus={false}>
      {children}
    </SessionProvider>
  );
}

export default AuthSessionProvider;
