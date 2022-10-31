import { useState, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { Toaster } from "react-hot-toast";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled from "@emotion/styled";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Deposit from "./components/modals/Deposit";
import Redeem from "./components/modals/Redeem";
import Wallet from "./components/modals/Wallet";

import Coinflip from "./pages/coinflip";
import Roulette from "./pages/roulette";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  const [wallet, setWallet] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [redeem, setRedeem] = useState(false);

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter({ network })],
    [network]
  );

  return (
    <Router>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <WalletModalProvider>
            <Root>
              <Deposit open={deposit} onClose={() => setDeposit(false)} />
              <Redeem open={redeem} onClose={() => setRedeem(false)} />
              <Wallet open={wallet} onClose={() => setWallet(false)} />

              <Header setDeposit={setDeposit} setWallet={setWallet} />
              <Chat />

              <Routes>
                <Route path="/" element={<Navigate replace to="/coinflip" />} />
                <Route path="/coinflip" element={<Coinflip />} />
                <Route path="/roulette" element={<Roulette />} />
              </Routes>
            </Root>

            <Footer />
            <Toaster position="bottom-right" />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </Router>
  );
}

const Root = styled("div")`
  max-width: 1480px;
  padding-left: 280px;
  margin: 0 auto;
  @media screen and (max-width: 1144px) {
    padding-left: 0;
  }
`;

export default App;
