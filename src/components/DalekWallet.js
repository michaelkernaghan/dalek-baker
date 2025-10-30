import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const DalekWallet = ({ onConnect, onDisconnect }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [connected, setConnected] = useState(false);
  const [chainId, setChainId] = useState(null);
  const [isEtherlink, setIsEtherlink] = useState(false);

  // Etherlink network configurations
  const ETHERLINK_TESTNET = {
    chainId: '0x1F57B', // 128123 in hex
    chainName: 'Etherlink Ghostnet',
    nativeCurrency: {
      name: 'XTZ',
      symbol: 'XTZ',
      decimals: 18,
    },
    rpcUrls: ['https://node.ghostnet.etherlink.com'],
    blockExplorerUrls: ['https://testnet-explorer.etherlink.com'],
  };

  const ETHERLINK_MAINNET = {
    chainId: '0xA709', // 42793 in hex
    chainName: 'Etherlink',
    nativeCurrency: {
      name: 'XTZ', 
      symbol: 'XTZ',
      decimals: 18,
    },
    rpcUrls: ['https://node.mainnet.etherlink.com'],
    blockExplorerUrls: ['https://explorer.etherlink.com'],
  };

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      
      try {
        const accounts = await web3Instance.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setConnected(true);
          
          const chainId = await web3Instance.eth.getChainId();
          setChainId(chainId);
          setIsEtherlink(chainId === 128123 || chainId === 42793);
          
          if (onConnect) {
            onConnect(web3Instance, accounts[0]);
          }
        }
      } catch (error) {
        console.error('Error checking connection:', error);
      }
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('🤖 EXTERMINATE! Please install MetaMask or another Web3 wallet!');
      return;
    }

    try {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3Instance.eth.getAccounts();
      
      setAccount(accounts[0]);
      setConnected(true);
      
      const chainId = await web3Instance.eth.getChainId();
      setChainId(chainId);
      setIsEtherlink(chainId === 128123 || chainId === 42793);
      
      if (onConnect) {
        onConnect(web3Instance, accounts[0]);
      }
      
      console.log('🤖 DALEK WALLET CONNECTED!');
    } catch (error) {
      console.error('🤖 CONNECTION FAILED:', error);
      alert('🤖 Failed to connect wallet! EXTERMINATE THE BUGS!');
    }
  };

  const addEtherlinkNetwork = async (isMainnet = false) => {
    if (!window.ethereum) return;

    const networkConfig = isMainnet ? ETHERLINK_MAINNET : ETHERLINK_TESTNET;

    console.log('🚨 DEBUG: ADD NETWORK ATTEMPT');
    console.log('🚨 Network Config being sent:', JSON.stringify(networkConfig, null, 2));
    console.log('🚨 Is Mainnet:', isMainnet);
    console.log('🚨 Window location:', window.location.href);

    try {
      console.log('🚨 Sending wallet_addEthereumChain request...');
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [networkConfig],
      });
      console.log('🤖 ETHERLINK NETWORK ADDED SUCCESSFULLY!');
      
      // Try to switch to it after adding
      console.log('🚨 Now attempting to switch to newly added network...');
      const targetChainId = isMainnet ? '0xA709' : '0x1F57B';
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: targetChainId }],
      });
      console.log('🤖 SUCCESSFULLY SWITCHED TO NEWLY ADDED NETWORK!');
    } catch (error) {
      console.error('🚨 FAILED TO ADD/SWITCH NETWORK:', error);
      console.error('🚨 Error details:', JSON.stringify(error, null, 2));
      alert(`🤖 Failed to add Etherlink network: ${error.message}`);
    }
  };

  const switchToEtherlink = async (isMainnet = false) => {
    if (!window.ethereum) {
      alert('🤖 No wallet detected! Please install MetaMask.');
      return;
    }

    const targetChainId = isMainnet ? '0xA709' : '0x1F57B';
    const networkName = isMainnet ? 'Etherlink' : 'Etherlink Ghostnet';
    const networkConfig = isMainnet ? ETHERLINK_MAINNET : ETHERLINK_TESTNET;

    console.log('🚨 DEBUG: NETWORK SWITCH ATTEMPT');
    console.log('🚨 Target Network Config:', JSON.stringify(networkConfig, null, 2));
    console.log('🚨 Target Chain ID:', targetChainId);
    console.log('🚨 Current window.location:', window.location.href);

    try {
      console.log('🚨 Step 1: Attempting wallet_switchEthereumChain...');
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: targetChainId }],
      });
      console.log(`🤖 SUCCESSFULLY SWITCHED TO ${networkName}!`);
    } catch (error) {
      console.log('🚨 Switch failed, error code:', error.code);
      console.log('🚨 Full error:', error);

      if (error.code === 4902) {
        // Network not added, try to add it
        console.log('🚨 Step 2: Network not found, adding it...');
        await addEtherlinkNetwork(isMainnet);
      } else {
        console.error('🤖 FAILED TO SWITCH NETWORK:', error);
        alert(`🤖 Failed to switch to ${networkName}: ${error.message}`);
      }
    }
  };

  const disconnectWallet = () => {
    setAccount('');
    setConnected(false);
    setWeb3(null);
    setChainId(null);
    setIsEtherlink(false);
    
    if (onDisconnect) {
      onDisconnect();
    }
    
    console.log('🤖 DALEK WALLET DISCONNECTED!');
  };

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const getNetworkName = () => {
    if (chainId === 128123) return 'Etherlink Ghostnet';
    if (chainId === 42793) return 'Etherlink';
    return `Chain ${chainId}`;
  };

  return (
    <div className="bg-gray-900 border border-red-500 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-red-400">🤖 DALEK WALLET CONTROL</h2>
        {connected && (
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isEtherlink ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
            <span className="text-sm text-gray-300">{getNetworkName()}</span>
          </div>
        )}
      </div>
      
      {!connected ? (
        <div className="text-center">
          <p className="text-gray-300 mb-4">🤖 CONNECT YOUR HUMAN WALLET TO BEGIN EXTERMINATION!</p>
          <button
            onClick={connectWallet}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold transition-colors"
          >
            🤖 CONNECT WALLET
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded">
            <p className="text-gray-300">
              <strong>🤖 Dalek Address:</strong> {formatAddress(account)}
            </p>
            <p className="text-gray-300">
              <strong>🤖 Network:</strong> {getNetworkName()}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              <strong>Chain ID:</strong> {chainId} | <strong>Etherlink:</strong> {isEtherlink ? '✅ YES' : '❌ NO'}
            </p>
          </div>
          
          {!isEtherlink && (
            <div className="bg-yellow-900 border border-yellow-600 p-4 rounded">
              <p className="text-yellow-200 mb-3">
                ⚠️ You're not on Etherlink! Switch networks to use DALEK coins.
              </p>
              <div className="bg-black p-3 rounded mb-3">
                <p className="text-yellow-300 text-sm">
                  <strong>Target Networks:</strong>
                </p>
                <p className="text-gray-300 text-xs">
                  • Etherlink Ghostnet: https://node.ghostnet.etherlink.com (Chain ID: 128123)
                </p>
                <p className="text-gray-300 text-xs">  
                  • Etherlink: https://node.mainnet.etherlink.com (Chain ID: 42793)
                </p>
              </div>
                                   <div className="space-x-2">
                       <button
                         onClick={() => switchToEtherlink(false)}
                         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
                       >
                         🤖 Switch to Etherlink Ghostnet
                       </button>
                       <button
                         onClick={() => switchToEtherlink(true)}
                         className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors"
                       >
                         🤖 Switch to Etherlink
                       </button>
                     </div>
                     <div className="mt-3 p-3 bg-yellow-800 rounded text-xs">
                       <p className="text-yellow-200 font-bold">⚠️ If automatic switching fails:</p>
                       <p className="text-yellow-100 mt-1">Manually add in MetaMask:</p>
                       <p className="text-gray-300 font-mono text-xs">
                         RPC: https://node.ghostnet.etherlink.com<br/>
                         Chain ID: 128123<br/>
                         Symbol: XTZ
                       </p>
                     </div>
            </div>
          )}
          
          <button
            onClick={disconnectWallet}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
          >
            🤖 DISCONNECT
          </button>
        </div>
      )}
    </div>
  );
};

export default DalekWallet;
