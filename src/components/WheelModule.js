import { useState } from "react";
import { ethers } from "ethers";
import TAAMS_ABI from "../abi/TAAMS_ABI.json";

const CONTRACT_ADDRESS = "0x087B3298Dc17D5f8982966844869a50095220698";

export default function WheelModule() {
  const [eligible, setEligible] = useState(false);

  const checkEligibility = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TAAMS_ABI, provider);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    const [isEligible] = await contract.getWheelSpinEligibility(address);
    setEligible(isEligible);
  };

  const spinWheel = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TAAMS_ABI, signer);
    await contract.spinWheel();
    alert("🎡 Roue tournée !");
  };

  return (
    <div>
      <button onClick={checkEligibility}>Vérifier éligibilité</button>
      {eligible && <button onClick={spinWheel}>Tourner la roue</button>}
    </div>
  );
}

