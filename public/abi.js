// ⚠️ COLEZ VOTRE ABI COMPLÈTE ICI ⚠️
const TAAMS_ABI = [
    // Votre ABI complète ici...
    // (Conservez tout le contenu ABI que vous m'avez fourni précédemment)
];

// Configuration du réseau Mega Testnet
const megaTestnetConfig = {
    chainId: "0x18C6",
    chainName: "Mega Testnet",
    nativeCurrency: {
        name: "MegaETH",
        symbol: "TAAMS",
        decimals: 18
    },
    rpcUrls: ["https://carrot.megaeth.com/rpc"],
    blockExplorerUrls: ["https://megaexplorer.xyz"]
};

export { TAAMS_ABI, megaTestnetConfig };