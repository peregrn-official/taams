import React from "react";
import Faucet from "./components/Faucet";
import TransactionTable from "./components/TransactionTable";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🚀 TAAMS DApp</h1>
      <Faucet />
      <TransactionTable />
    </div>
  );
}

export default App;
