import { TAAMS_ABI, megaTestnetConfig } from './abi.js';

// Configuration
const contractAddress = "0x087B3298Dc17D5f8982966844869a50095220698";

// État global
let provider, signer, contract, connectedAddress;

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initWallet();
    setupEventListeners();
});

// ==================== FONCTIONS WALLET ====================
async function initWallet() {
    if (!window.ethereum) {
        showModal("Erreur", "MetaMask non détecté. Veuillez installer l'extension.");
        return;
    }

    provider = new ethers.providers.Web3Provider(window.ethereum);
    
    // Écouteurs d'événements
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
            handleWalletConnection(accounts[0]);
        } else {
            disconnectWallet();
        }
    });

    window.ethereum.on('chainChanged', (chainId) => {
        if (chainId !== megaTestnetConfig.chainId) {
            alert("Veuillez basculer sur Mega Testnet");
        }
    });

    // Vérifier la connexion existante
    const accounts = await provider.listAccounts();
    if (accounts.length > 0) {
        handleWalletConnection(accounts[0]);
    }
}

async function connectWallet() {
    try {
        // Demander la connexion
        await provider.send("eth_requestAccounts", []);
        
        // Vérifier le réseau
        const chainId = await provider.send("eth_chainId", []);
        if (chainId !== megaTestnetConfig.chainId) {
            try {
                await provider.send("wallet_addEthereumChain", [megaTestnetConfig]);
            } catch (addError) {
                console.error("Erreur d'ajout du réseau:", addError);
                throw new Error("Impossible d'ajouter Mega Testnet");
            }
        }
        
        // Mettre à jour l'interface
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
            handleWalletConnection(accounts[0]);
            showModal("Connecté", `Wallet connecté: ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`);
        }
    } catch (error) {
        console.error("Erreur de connexion:", error);
        showModal("Erreur", error.message);
    }
}

function handleWalletConnection(address) {
    connectedAddress = address;
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, TAAMS_ABI, signer);
    updateWalletUI();
}

function disconnectWallet() {
    connectedAddress = null;
    document.getElementById('wallet-info').classList.add('hidden');
    document.getElementById('connect-wallet').classList.remove('hidden');
    document.getElementById('wallet-details').innerHTML = '<p>Connectez votre wallet pour interagir avec TAAMS</p>';
}

async function updateWalletUI() {
    const shortAddress = `${connectedAddress.substring(0, 6)}...${connectedAddress.substring(38)}`;
    document.getElementById('wallet-address').textContent = shortAddress;
    document.getElementById('wallet-info').classList.remove('hidden');
    document.getElementById('connect-wallet').classList.add('hidden');

    // Mettre à jour le solde
    try {
        const balance = await contract.balanceOf(connectedAddress);
        document.getElementById('wallet-details').innerHTML = `
            <p><span class="text-gray-400">Adresse:</span> ${shortAddress}</p>
            <p><span class="text-gray-400">Solde TAAMS:</span> ${ethers.utils.formatEther(balance)}</p>
        `;
    } catch (error) {
        console.error("Erreur récupération solde:", error);
    }
}

// ==================== FONCTIONS CONTRAT ====================
async function stakeTokens() {
    if (!connectedAddress) {
        showModal("Erreur", "Veuillez connecter votre wallet");
        return;
    }

    const amount = document.getElementById('stake-amount').value;
    if (!amount || isNaN(amount) || amount <= 0) {
        showModal("Erreur", "Montant invalide");
        return;
    }

    try {
        showModal("Transaction", "Confirmez la transaction dans MetaMask...");
        const tx = await contract.stake(ethers.utils.parseEther(amount));
        await tx.wait();
        showModal("Succès", `${amount} TAAMS stakés avec succès!`);
        updateWalletUI();
    } catch (error) {
        console.error("Erreur de staking:", error);
        showModal("Erreur", error.reason || error.message);
    }
}

async function unstakeTokens() {
    if (!connectedAddress) {
        showModal("Erreur", "Veuillez connecter votre wallet");
        return;
    }

    try {
        showModal("Transaction", "Confirmez la transaction dans MetaMask...");
        const tx = await contract.unstake();
        await tx.wait();
        showModal("Succès", "Tokens unstakés avec succès!");
        updateWalletUI();
    } catch (error) {
        console.error("Erreur d'unstaking:", error);
        showModal("Erreur", error.reason || error.message);
    }
}

async function claimBL2PReward() {
    if (!connectedAddress) {
        showModal("Erreur", "Veuillez connecter votre wallet");
        return;
    }

    try {
        showModal("Transaction", "Confirmez la transaction dans MetaMask...");
        const tx = await contract.claimBL2PReward();
        await tx.wait();
        showModal("Succès", "Récompenses BL2P réclamées!");
        updateWalletUI();
    } catch (error) {
        console.error("Erreur de claim:", error);
        showModal("Erreur", error.reason || error.message);
    }
}

async function participateInBurn() {
    if (!connectedAddress) {
        showModal("Erreur", "Veuillez connecter votre wallet");
        return;
    }

    const amount = document.getElementById('burn-amount').value;
    if (!amount || isNaN(amount) || amount <= 0) {
        showModal("Erreur", "Montant invalide");
        return;
    }

    try {
        showModal("Transaction", "Confirmez la transaction dans MetaMask...");
        const tx = await contract.participateInBurn(ethers.utils.parseEther(amount));
        await tx.wait();
        showModal("Succès", `${amount} TAAMS brûlés avec succès!`);
        updateWalletUI();
    } catch (error) {
        console.error("Erreur de burn:", error);
        showModal("Erreur", error.reason || error.message);
    }
}

// ==================== GESTION DE L'INTERFACE ====================
function setupEventListeners() {
    // Wallet
    document.getElementById('connect-wallet').addEventListener('click', connectWallet);

    // Stake
    document.getElementById('stake-btn').addEventListener('click', stakeTokens);
    document.getElementById('unstake-btn').addEventListener('click', unstakeTokens);

    // Rewards
    document.getElementById('claim-rewards').addEventListener('click', claimBL2PReward);

    // Burn
    document.getElementById('participate-burn').addEventListener('click', participateInBurn);

    // Modal
    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('transaction-modal').classList.add('hidden');
    });
}

function showModal(title, content) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').innerHTML = `<p class="text-gray-200">${content}</p>`;
    document.getElementById('transaction-modal').classList.remove('hidden');
}