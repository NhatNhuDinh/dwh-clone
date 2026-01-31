import { PrimeReactProvider } from 'primereact/api';
import { type PropsWithChildren } from 'react';
import { AuthProvider } from './AuthProvider';
export function AppProviders({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </AuthProvider>
  );
}
