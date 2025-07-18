async function stake(amount) {
    if (!contract) return alert("Connectez MetaMask d'abord !");
    const accounts = await web3.eth.getAccounts();
    try {
        const weiAmount = web3.utils.toWei(amount, 'ether');
        await contract.methods.stake(weiAmount).send({ from: accounts[0] });
        addLog(`Stake de ${amount} TAAMS effectué`);
        updateCharts();
    } catch (error) {
        addLog(`Erreur lors du stake: ${error.message}`);
    }
}

async function unstake(amount) {
    if (!contract) return alert("Connectez MetaMask d'abord !");
    const accounts = await web3.eth.getAccounts();
    try {
        const weiAmount = web3.utils.toWei(amount, 'ether');
        await contract.methods.unstake(weiAmount).send({ from: accounts[0] });
        addLog(`Unstake de ${amount} TAAMS effectué`);
        updateCharts();
    } catch (error) {
        addLog(`Erreur lors du unstake: ${error.message}`);
    }
}

async function delegateVote(delegateAddress, amount) {
    if (!contract) return alert("Connectez MetaMask d'abord !");
    const accounts = await web3.eth.getAccounts();
    try {
        const weiAmount = web3.utils.toWei(amount, 'ether');
        await contract.methods.delegateVote(delegateAddress, weiAmount).send({ from: accounts[0] });
        addLog(`Délégation de ${amount} TAAMS à ${delegateAddress}`);
        updateCharts();
    } catch (error) {
        addLog(`Erreur lors de la délégation: ${error.message}`);
    }
}

async function commitVote(proposalId, commitHash) {
    if (!contract) return alert("Connectez MetaMask d'abord !");
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.commitVote(proposalId, commitHash).send({ from: accounts[0] });
        addLog(`Vote soumis pour la proposition ${proposalId}`);
    } catch (error) {
        addLog(`Erreur lors du vote: ${error.message}`);
    }
}

async function burnInactiveBL2P(userAddress) {
    if (!contract) return alert("Connectez MetaMask d'abord !");
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.burnInactiveBL2P(userAddress).send({ from: accounts[0] });
        addLog(`Burn BL2P inactif pour ${userAddress}`);
        updateCharts();
    } catch (error) {
        addLog(`Erreur lors du burn: ${error.message}`);
    }
}

async function claimBL2PReward() {
    if (!contract) return alert("Connectez MetaMask d'abord !");
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.claimBL2PReward().send({ from: accounts[0] });
        addLog(`Récompense BL2P réclamée`);
        updateCharts();
    } catch (error) {
        addLog(`Erreur lors du claim: ${error.message}`);
    }
}

async function spinWheel() {
    if (!contract) return alert("Connectez MetaMask d'abord !");
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.spinWheel().send({ from: accounts[0] });
        addLog(`Wheel spun`);
        updateCharts();
    } catch (error) {
        addLog(`Erreur lors du spin: ${error.message}`);
    }
}

function addLog(message) {
    const logsDiv = document.getElementById('logs');
    if (logsDiv) {
        const logEntry = document.createElement('p');
        logEntry.innerText = `[${new Date().toLocaleTimeString()}] ${message}`;
        logsDiv.appendChild(logEntry);
    }
}

async function loadLogs() {
    if (!contract) return;
    const events = await contract.getPastEvents('allEvents', { fromBlock: 0 });
    events.forEach(event => {
        if (event.event === 'Staked') {
            addLog(`Stake par ${event.returnValues.user}: ${web3.utils.fromWei(event.returnValues.amount, 'ether')} TAAMS`);
        } else if (event.event === 'Unstaked') {
            addLog(`Unstake par ${event.returnValues.user}: ${web3.utils.fromWei(event.returnValues.amount, 'ether')} TAAMS`);
        } else if (event.event === 'WheelSpun') {
            addLog(`Wheel spun par ${event.returnValues.user}: Récompense ${web3.utils.fromWei(event.returnValues.reward, 'ether')} TAAMS`);
        } else if (event.event === 'BL2PRewardClaimed') {
            addLog(`Récompense BL2P réclamée par ${event.returnValues.user}: ${web3.utils.fromWei(event.returnValues.reward, 'ether')} TAAMS`);
        } else if (event.event === 'InactiveBL2PBurned') {
            addLog(`Burn BL2P inactif par ${event.returnValues.user}: ${web3.utils.fromWei(event.returnValues.amount, 'ether')} TAAMS`);
        } else if (event.event === 'TokenEvent') {
            addLog(`${event.returnValues.action} par ${event.returnValues.user}: ${web3.utils.fromWei(event.returnValues.value, 'ether')} TAAMS`);
        }
    });
}