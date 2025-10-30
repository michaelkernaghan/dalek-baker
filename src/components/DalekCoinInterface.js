import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

// You'll need to update this with your actual deployed contract address
const DALEK_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_DALEK_CONTRACT_ADDRESS || '';

// Simplified ABI - add more functions as needed
const DALEK_ABI = [
  {
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol", 
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view", 
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "to", "type": "address"},
      {"internalType": "uint256", "name": "amount", "type": "uint256"}
    ],
    "name": "transfer",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "to", "type": "address"},
      {"internalType": "uint256", "name": "amount", "type": "uint256"}
    ],
    "name": "exterminateTransfer",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getDalekStats",
    "outputs": [
      {"internalType": "uint256", "name": "totalArmy", "type": "uint256"},
      {"internalType": "uint256", "name": "maxArmy", "type": "uint256"},
      {"internalType": "uint256", "name": "humansDefeated", "type": "uint256"},
      {"internalType": "uint256", "name": "regenerations", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "isDalek",
    "outputs": [
      {"internalType": "bool", "name": "emperor", "type": "bool"},
      {"internalType": "bool", "name": "soldier", "type": "bool"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "regenerate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const DalekCoinInterface = ({ web3, account }) => {
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState('0');
  const [stats, setStats] = useState({});
  const [dalekStatus, setDalekStatus] = useState({ emperor: false, soldier: false });
  const [loading, setLoading] = useState(false);
  const [transferTo, setTransferTo] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [regenerateAmount, setRegenerateAmount] = useState('');

  // Initialize demo data
  useEffect(() => {
    if (!web3 || !account || !DALEK_CONTRACT_ADDRESS) {
      console.log('🤖 Loading demo data for frontend testing');
      setBalance('1000000');
      setStats({
        totalArmy: '100000000',
        maxArmy: '1000000000', 
        humansDefeated: '42',
        regenerations: '7'
      });
      setDalekStatus({
        emperor: true,
        soldier: false
      });
    }
  }, [web3, account]);

  useEffect(() => {
    if (web3 && DALEK_CONTRACT_ADDRESS && account) {
      try {
        const contractInstance = new web3.eth.Contract(DALEK_ABI, DALEK_CONTRACT_ADDRESS);
        setContract(contractInstance);
        loadData(contractInstance);
      } catch (error) {
        console.log('🤖 Contract setup error (expected if testing):', error.message);
        setContract(null);
      }
    }
  }, [web3, account]);

  const loadData = async (contractInstance) => {
    if (!contractInstance || !account) return;
    
    setLoading(true);
    try {
      // Load balance
      const balance = await contractInstance.methods.balanceOf(account).call();
      setBalance(Web3.utils.fromWei(balance, 'ether'));
      
      // Load Dalek stats
      const stats = await contractInstance.methods.getDalekStats().call();
      setStats({
        totalArmy: Web3.utils.fromWei(stats[0], 'ether'),
        maxArmy: Web3.utils.fromWei(stats[1], 'ether'),
        humansDefeated: stats[2],
        regenerations: stats[3]
      });
      
      // Check Dalek status
      const dalekStatus = await contractInstance.methods.isDalek(account).call();
      setDalekStatus({
        emperor: dalekStatus[0],
        soldier: dalekStatus[1]
      });
    } catch (error) {
      console.log('🤖 Contract not deployed yet - using demo data');
      
      // Set demo data for testing the UI
      setBalance('1000000');
      setStats({
        totalArmy: '100000000',
        maxArmy: '1000000000', 
        humansDefeated: '42',
        regenerations: '7'
      });
      setDalekStatus({
        emperor: true,
        soldier: false
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTransfer = async (useExterminate = false) => {
    if (!transferTo || !transferAmount) return;
    
    // Demo mode - show success message
    if (!contract) {
      alert(`🤖 DEMO MODE: ${useExterminate ? 'EXTERMINATION' : 'TRANSFER'} of ${transferAmount} DALEK to ${transferTo.substring(0, 6)}... simulated successfully!`);
      setTransferTo('');
      setTransferAmount('');
      return;
    }
    
    setLoading(true);
    try {
      const amountWei = Web3.utils.toWei(transferAmount, 'ether');
      const method = useExterminate ? 'exterminateTransfer' : 'transfer';
      
      await contract.methods[method](transferTo, amountWei).send({ from: account });
      
      console.log(`🤖 ${useExterminate ? 'EXTERMINATION' : 'TRANSFER'} SUCCESSFUL!`);
      setTransferTo('');
      setTransferAmount('');
      
      // Reload data
      await loadData(contract);
    } catch (error) {
      console.error('🤖 TRANSFER FAILED:', error);
      alert('🤖 Transfer failed! EXTERMINATE THE BUGS!');
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerate = async () => {
    if (!regenerateAmount) return;
    
    // Demo mode - show success message
    if (!contract) {
      alert(`🤖 DEMO MODE: REGENERATION of ${regenerateAmount} DALEK simulated successfully!`);
      setRegenerateAmount('');
      return;
    }
    
    setLoading(true);
    try {
      const amountWei = Web3.utils.toWei(regenerateAmount, 'ether');
      await contract.methods.regenerate(amountWei).send({ from: account });
      
      console.log('🤖 REGENERATION SUCCESSFUL!');
      setRegenerateAmount('');
      
      // Reload data
      await loadData(contract);
    } catch (error) {
      console.error('🤖 REGENERATION FAILED:', error);
      alert('🤖 Regeneration failed! Only Daleks can regenerate!');
    } finally {
      setLoading(false);
    }
  };

  if (!web3 || !account) {
    return (
      <div className="bg-gray-900 border border-gray-600 rounded-lg p-6 text-center">
        <p className="text-gray-400">🤖 CONNECT WALLET TO ACCESS DALEK CONTROLS</p>
      </div>
    );
  }

  if (!DALEK_CONTRACT_ADDRESS) {
    return (
      <div className="space-y-6">
        <div className="bg-red-900 border border-red-600 rounded-lg p-6 text-center mb-6">
          <p className="text-red-200">🤖 CONTRACT NOT DEPLOYED YET - DEMO MODE!</p>
          <p className="text-red-300 text-sm mt-2">This is a preview of your Dalek coin interface. Deploy the contract and set NEXT_PUBLIC_DALEK_CONTRACT_ADDRESS in your .env.local</p>
        </div>
        
        {/* Show demo interface even without contract */}
        <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-400 mb-4">🤖 DALEK STATUS PANEL (DEMO)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="text-green-400 font-bold mb-2">YOUR DALEK ARMY</h4>
              <p className="text-white text-2xl font-mono">1,000,000 DALEK</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="text-blue-400 font-bold mb-2">DALEK RANK</h4>
              <div className="space-y-1">
                <p className="text-white">
                  🤖 Emperor: <span className="text-green-400">YES</span>
                </p>
                <p className="text-white">
                  🤖 Soldier: <span className="text-red-400">NO</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">🤖 GALACTIC ARMY STATISTICS (DEMO)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="text-gray-400 text-sm">Total Army</p>
              <p className="text-white font-bold">100,000,000</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="text-gray-400 text-sm">Max Army</p>
              <p className="text-white font-bold">1,000,000,000</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="text-gray-400 text-sm">Humans Defeated</p>
              <p className="text-red-400 font-bold">42</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="text-gray-400 text-sm">Regenerations</p>
              <p className="text-green-400 font-bold">7</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-blue-500 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-400 mb-4">🤖 DALEK TRANSFER CONTROLS (DEMO)</h3>
          <p className="text-center text-gray-400">Connect wallet to test transfer functions</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Dalek Status Card */}
      <div className="bg-gray-900 border border-red-500 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-400 mb-4">🤖 DALEK STATUS PANEL</h3>
        
        {loading ? (
          <p className="text-gray-300">🤖 SCANNING FOR DALEKS...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="text-green-400 font-bold mb-2">YOUR DALEK ARMY</h4>
              <p className="text-white text-2xl font-mono">{parseFloat(balance).toLocaleString()} DALEK</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="text-blue-400 font-bold mb-2">DALEK RANK</h4>
              <div className="space-y-1">
                <p className="text-white">
                  🤖 Emperor: <span className={dalekStatus.emperor ? 'text-green-400' : 'text-red-400'}>
                    {dalekStatus.emperor ? 'YES' : 'NO'}
                  </span>
                </p>
                <p className="text-white">
                  🤖 Soldier: <span className={dalekStatus.soldier ? 'text-green-400' : 'text-red-400'}>
                    {dalekStatus.soldier ? 'YES' : 'NO'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Army Statistics */}
      <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">🤖 GALACTIC ARMY STATISTICS</h3>
        
        {loading ? (
          <p className="text-gray-300">🤖 CALCULATING SUPREMACY...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="text-gray-400 text-sm">Total Army</p>
              <p className="text-white font-bold">{parseFloat(stats.totalArmy || 0).toLocaleString()}</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="text-gray-400 text-sm">Max Army</p>
              <p className="text-white font-bold">{parseFloat(stats.maxArmy || 0).toLocaleString()}</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="text-gray-400 text-sm">Humans Defeated</p>
              <p className="text-red-400 font-bold">{stats.humansDefeated || 0}</p>
            </div>
            <div className="bg-gray-800 p-3 rounded text-center">
              <p className="text-gray-400 text-sm">Regenerations</p>
              <p className="text-green-400 font-bold">{stats.regenerations || 0}</p>
            </div>
          </div>
        )}
      </div>

      {/* Transfer Controls */}
      <div className="bg-gray-900 border border-blue-500 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-400 mb-4">🤖 DALEK TRANSFER CONTROLS</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Target Address:</label>
            <input
              type="text"
              value={transferTo}
              onChange={(e) => setTransferTo(e.target.value)}
              placeholder="0x..."
              className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Amount (DALEK):</label>
            <input
              type="number"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              placeholder="100"
              className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={() => handleTransfer(false)}
              disabled={loading || !transferTo || !transferAmount}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-4 py-2 rounded font-bold transition-colors"
            >
              🤖 STANDARD TRANSFER
            </button>
            
            <button
              onClick={() => handleTransfer(true)}
              disabled={loading || !transferTo || !transferAmount}
              className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-4 py-2 rounded font-bold transition-colors"
            >
              🤖 EXTERMINATE TRANSFER
            </button>
          </div>
        </div>
      </div>

      {/* Regeneration Controls (only for Daleks) */}
      {(dalekStatus.emperor || dalekStatus.soldier) && (
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-400 mb-4">🤖 DALEK REGENERATION CHAMBER</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Regeneration Amount (DALEK):</label>
              <input
                type="number"
                value={regenerateAmount}
                onChange={(e) => setRegenerateAmount(e.target.value)}
                placeholder="1000"
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white focus:border-green-500 focus:outline-none"
              />
            </div>
            
            <button
              onClick={handleRegenerate}
              disabled={loading || !regenerateAmount}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-4 py-2 rounded font-bold transition-colors"
            >
              🤖 REGENERATE DALEKS
            </button>
            
            <p className="text-green-300 text-sm">
              ⚡ Only Daleks can regenerate new tokens from the quantum matrix!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DalekCoinInterface;
