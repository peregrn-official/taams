import { useState } from "react";
import { ethers } from "ethers";
import TAAMS_ABI from "./TAAMS_ABI.json";

const CONTRACT_ADDRESS = "0x087B3298Dc17D5f8982966844869a50095220698";

export default function Faucet() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const sendTAAMS = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, TAAMS_ABI, signer);

      const tx = await contract.transfer(to, ethers.parseUnits(amount, 18));
      await tx.wait();
      alert(`✅ ${amount} TAAMS envoyés à ${to}`);
    } catch (err) {
      console.error("❌ Erreur de transfert :", err);
      alert("Erreur lors de l'envoi des TAAMS");
    }
  };

  return (
    <div>
      <h2>🧁 Faucet TAAMS</h2>
      <input placeholder="Adresse du destinataire" value={to} onChange={(e) => setTo(e.target.value)} />
      <input placeholder="Montant TAAMS" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={sendTAAMS}>Envoyer</button>
    </div>
  );
}
