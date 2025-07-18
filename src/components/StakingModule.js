import { useState } from "react";
import { ethers } from "ethers";
import TAAMS_ABI from "../abi/TAAMS_ABI.json";

const CONTRACT_ADDRESS = "0x087B3298Dc17D5f8982966844869a50095220698";

export default function StakingModule() {
  const [amount, setAmount] = useState("");

  const stake = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TAAMS_ABI, signer);
    const tx = await contract.stake(ethers.parseUnits(amount, 18));
    await tx.wait();
    alert("✅ TAAMS stakés !");
  };

  const unstake = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TAAMS_ABI, signer);
    const tx = await contract.unstake();
    await tx.wait();
    alert("✅ Unstake effectué !");
  };

  return (
    <div>
      <input placeholder="Montant à staker" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={stake}>Staker</button>
      <button onClick={unstake}>Unstake</button>
    </div>
  );
}

