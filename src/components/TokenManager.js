import { useState } from "react";
import { ethers } from "ethers";
import TAAMS_ABI from "../abi/TAAMS_ABI.json";

const CONTRACT_ADDRESS = "0x087B3298Dc17D5f8982966844869a50095220698";

export default function TokenManager() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  const checkBalance = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TAAMS_ABI, provider);
    const bal = await contract.balanceOf(address);
    setBalance(ethers.formatUnits(bal, 18));
  };

  return (
    <div>
      <input placeholder="Adresse" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={checkBalance}>Vérifier solde</button>
      {balance && <p>💰 Solde : {balance} TAAMS</p>}
    </div>
  );
}
