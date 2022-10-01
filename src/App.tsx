import { useState } from "react";

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

import Coinflip from "./pages/coinflip";
import Roulette from "./pages/roulette";

function App() {
  const [deposit, setDeposit] = useState(false);

  return (
    <Router>
      <Root>
        <Deposit open={deposit} onClose={() => setDeposit(false)} />

        <Header setDeposit={setDeposit} />
        <Chat />

        <Routes>
          <Route path="/" element={<Navigate replace to="/coinflip" />} />
          <Route path="/coinflip" element={<Coinflip />} />
          <Route path="/roulette" element={<Roulette />} />
        </Routes>
      </Root>

      <Footer />
    </Router>
  );
}

const Root = styled("div")`
  max-width: 1480px;
  padding-left: 280px;
  margin: 0 auto;
`;

export default App;
