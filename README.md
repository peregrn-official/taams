# taams
🚀 TAAMS - Écosystème Complet de Staking & Badges NFT
🌟 Fonctionnalités Clés
🪙 Token ERC20 Avancé

Taxe automatique 2% sur les transferts

Mécanisme de burn 1% intégré

Approvisionnement max : 42,000,069 TAAMS

🏦 Module de Staking Intelligent

10 niveaux de progression

Récompenses journalières calculées en temps réel

Bonus de +5% par niveau atteint

Système anti-bot intégré

🎖️ Collection de Badges NFT

Mint automatique à chaque nouveau niveau

10 designs uniques

Stockage des métadonnées sur IPFS

🛠 Installation Express

Cloner le dépôt

git clone https://github.com/votre-repo/taams-dapp.git
cd taams-dapp
Configurer les contrats
Éditer src/contracts.js avec vos adresses et ABI.

Lancer l'application
Ouvrir index.html dans un navigateur Web3 (MetaMask/Phantom).

💻 Guide Utilisateur
🔌 Connexion Wallet

Cliquer sur "Connect Wallet"

Autoriser la connexion via votre wallet

Votre solde s'affiche automatiquement

💰 Staking

Entrer un montant dans le champ dédié

Cliquer sur "Staker" et confirmer la transaction

Les récompenses s'accumulent en temps réel

🏆 Badges NFT

Visualiser dans l'onglet "Mes Badges"

Chaque niveau débloque un nouveau NFT

Partage social intégré

📊 Dashboard Complet
graph TD
    A[Portefeuille] --> B((Staking))
    B --> C{Niveau atteint?}
    C -->|Oui| D[Mint NFT]
    C -->|Non| B
    D --> E[Collection]
    🔧 Configuration Avancée
Modifier les paramètres économiques (dans app.js)
// Taxes et récompenses
const config = {
  taxRate: 2,    // 2%
  burnRate: 1,   // 1%
  baseAPY: 36.5, // 36.5% par an
  levelBonus: 5  // +5% par niveau
}

Badges personnalisés

Remplacer les images dans /public/badges/

Mettre à jour les métadonnées IPFS

Redémarrer l'application

📜 Contrats Intelligents
TAAMS.sol - Fonctions principales:

function stake(uint amount) external {
    require(!isBlacklisted[msg.sender], "Blacklisted");
    _transfer(msg.sender, address(this), amount);
    _updateLevel(msg.sender);
}

function _updateLevel(address user) internal {
    uint newLevel = _calculateLevel(stakes[user].amount);
    if(newLevel > userLevel[user]) {
        _mintBadge(user, newLevel);
    }
}

🚨 Sécurité
Contrat vérifié et audité

Ownership renoncé après déploiement

Système de pause d'urgence intégré

🤝 Contribuer
Forker le projet

Créer une feature branch (git checkout -b feat/amazing-feature)

Committer vos changements (git commit -m 'Add amazing feature')

Pousser vers la branche (git push origin feat/amazing-feature)

Ouvrir une Pull Request

📄 Licence
MIT License - Voir le fichier LICENSE pour plus de détails.
