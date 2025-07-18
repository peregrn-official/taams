import { ethers } from "ethers";
import TAAMS_ABI from "../abi/TAAMS_ABI.json";

const CONTRACT_ADDRESS = "0x087B3298Dc17D5f8982966844869a50095220698";

export default function BL2PManager() {
  const claimBL2P = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TAAMS_ABI, signer);
    await contract.claimBL2PReward();
    alert("✅ BL2P réclamé !");
  };

  const burnInactiveBL2P = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TAAMS_ABI, signer);
    const address = await signer.getAddress();
    await contract.burnInactiveBL2P(address);
    alert("🔥 BL2P inactif brûlé !");
  };

  return (
    <div>
      <button onClick={claimBL2P}>Réclamer BL2P</button>
      <button onClick={burnInactiveBL2P}>Brûler BL2P inactif</button>
    </div>
  );
}

