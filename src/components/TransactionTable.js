import React, { useEffect, useState } from "react";

function TransactionTable() {
  const [history, setHistory] = useState([]);

  // 📦 Exemple fictif d'historique local
  useEffect(() => {
    // Tu peux remplacer ça par des appels au contrat ou logs Web3
    const mockData = [
      { type: "Burn", value: "1000 TAAMS", status: "✅ Success" },
      { type: "Stake", value: "2500 TAAMS", status: "✅ Success" },
      { type: "Vote", value: "Proposal #3", status: "🗳️ Committed" },
      { type: "Wheel", value: "BL2P Reward", status: "🎉 Won!" }
    ];
    setHistory(mockData);
  }, []);

  return (
    <section className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">📊 Historique des Transactions</h2>
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2">🔧 Type</th>
            <th className="px-4 py-2">💸 Valeur</th>
            <th className="px-4 py-2">📍 Statut</th>
          </tr>
        </thead>
        <tbody>
          {history.map((tx, idx) => (
            <tr key={idx} className="border-b border-gray-600">
              <td className="px-4 py-2">{tx.type}</td>
              <td className="px-4 py-2">{tx.value}</td>
              <td className="px-4 py-2">{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TransactionTable;
