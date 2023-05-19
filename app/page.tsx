import "../styles/global.css";
import type { AppProps } from "next/app";

import "@0xsequence/design-system/styles.css";
import WagmiProvider from "components/WagmiProvider";
import ThemeProvider from "components/ThemeProvider";
import HomePage from "components/HomePage";

import { sequenceWallet } from "@0xsequence/rainbowkit-plugin";

console.log(sequenceWallet);

function MyApp() {
  return (
    <WagmiProvider>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </WagmiProvider>
  );
}

export default MyApp;
