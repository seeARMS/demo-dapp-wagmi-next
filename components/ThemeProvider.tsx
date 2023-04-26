"use client"

import { ThemeProvider } from '@0xsequence/design-system'

interface WagmiProviderProps {
  children: React.ReactNode
}

function Theme({ children }: WagmiProviderProps) {
  return (
    <ThemeProvider theme="dark">
      {children}
    </ThemeProvider>
  );
}

export default Theme;
