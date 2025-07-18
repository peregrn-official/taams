import { useState } from "react";
import { ethers } from "ethers";
import TAAMS_ABI from "../abi/TAAMS_ABI.json";

const CONTRACT_ADDRESS = "0x087B3298Dc17D5f8982966844869a50095220698";

export default function GovernanceModule() {
  const [desc, setDesc] = useState("");
  const [value, setValue] = useState("");
  const [proposalId, setProposalId] = useState("");

  const submitProposal = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TAAMS_ABI, signer);
    await contract.submitProposal(desc, value, ethers.ZeroAddress, 0);
    alert("🗳️ Proposition soumise !");
  };

  const executeProposal = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TAAMS_ABI, signer);
    await contract.executeProposal(proposalId);
    alert("✅ Proposition exécutée !");
  };

  return (
    <div>
      <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <input placeholder="Valeur" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={submitProposal}>Soumettre</button>
      <input placeholder="ID proposition" value={proposalId} onChange={(e) => setProposalId(e.target.value)} />
      <button onClick={executeProposal}>Exécuter</button>
    </div>
  );
}

