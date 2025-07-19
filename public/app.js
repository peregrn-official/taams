// Import des configurations
import { TAAMS_ABI, megaTestnetConfig } from './abi.js';

// Configuration du contrat
const contractAddress = "0x087B3298Dc17D5f8982966844869a50095220698";

// Variables globales
let provider, signer, contract;
let wheelSpinning = false;
const wheelSegments = ['100 TAAMS', '50 BL2P', 'Boost x2', 'Rien', '10 TAAMS', '100 BL2P'];

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initWallet();
    initWheel();
    setupEventListeners();
});

// Fonctions Wallet
async function initWallet() {
    if (!window.ethereum) {
        showModal("Erreur", "MetaMask non détecté");
        return;
    }

    provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
        await provider.send("wallet_addEthereumChain", [megaTestnetConfig]);
    } catch (error) {
        console.error("Erreur configuration réseau:", error);
    }
}

// Fonctions Roue
function initWheel() {
    const canvas = document.getElementById('wheel');
    if (!canvas) return;

    const resizeCanvas = () => {
        const size = Math.min(300, window.innerWidth * 0.8);
        canvas.width = size;
        canvas.height = size;
        drawWheel();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
}

function drawWheel(angle = 0) {
    const canvas = document.getElementById('wheel');
    const ctx = canvas.getContext('2d');
    const center = canvas.width / 2;
    const radius = center - 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessin des segments
    wheelSegments.forEach((text, i) => {
        const startAngle = angle + (i * 2 * Math.PI / wheelSegments.length);
        const endAngle = angle + ((i + 1) * 2 * Math.PI / wheelSegments.length);

        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, startAngle, endAngle);
        ctx.fillStyle = i % 2 ? '#4a90e2' : '#9b59b6';
        ctx.fill();

        // Texte
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(startAngle + Math.PI / wheelSegments.length);
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.font = '14px Arial';
        ctx.fillText(text, radius / 1.5, 5);
        ctx.restore();
    });

    // Pointeur
    ctx.beginPath();
    ctx.moveTo(center - 15, 20);
    ctx.lineTo(center + 15, 20);
    ctx.lineTo(center, 0);
    ctx.fillStyle = 'red';
    ctx.fill();
}

async function spinWheel() {
    if (wheelSpinning) return;
    wheelSpinning = true;

    const spinDuration = 3000; // 3 secondes
    const startTime = performance.now();
    const spins = 5 + Math.random() * 5; // 5-10 tours

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / spinDuration, 1);
        const angle = progress * spins * Math.PI * 2;

        drawWheel(angle);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            const segmentIndex = Math.floor(
                (angle % (Math.PI * 2)) / (Math.PI * 2) * wheelSegments.length
            ) % wheelSegments.length;
            showModal("Résultat", `Vous avez gagné : ${wheelSegments[segmentIndex]}`);
            wheelSpinning = false;
        }
    }

    requestAnimationFrame(animate);
}

// Gestion des événements
function setupEventListeners() {
    document.getElementById('spin-wheel')?.addEventListener('click', spinWheel);
    // ... autres écouteurs ...
}

// Fonction utilitaire
function showModal(title, content) {
    const modal = document.getElementById('transaction-modal');
    // ... implémentation ...
}