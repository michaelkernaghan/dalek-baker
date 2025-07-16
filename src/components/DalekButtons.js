// src/components/DalekButtons.js
import React, { useState, useEffect } from 'react';

const DalekButtons = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [operationHash, setOperationHash] = useState('');
  const BAKER_ADDRESS = 'tz1bSJYtfUP7G8by7WWgg5NnvTtMCu4AYqga';
  const SEOULNET_RPC = 'https://rpc.seoulnet.teztnets.xyz';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDelegation = async () => {
    try {
      setLoading(true);
      setError('');
      setOperationHash('');

      const { BeaconWallet } = await import('@taquito/beacon-wallet');
      const { TezosToolkit } = await import('@taquito/taquito');
      const { NetworkType } = await import('@airgap/beacon-sdk');

      // Initialize Tezos instance
      const Tezos = new TezosToolkit(SEOULNET_RPC);

      // Initialize wallet
      const wallet = new BeaconWallet({
        name: "DALEK BAKER DELEGATION",
        preferredNetwork: NetworkType.CUSTOM
      });

      // Set wallet provider
      Tezos.setWalletProvider(wallet);

      // Request permissions
      const permissions = await wallet.requestPermissions({
        network: {
          type: NetworkType.CUSTOM,
          name: 'seoulnet',
          rpcUrl: SEOULNET_RPC
        }
      });

      const userAddress = await wallet.getPKH();
      console.log('Connected address:', userAddress);

      // Check current delegation
      const delegateResponse = await Tezos.rpc.getDelegate(userAddress).catch(() => null);
      console.log('Current delegation:', delegateResponse);
      
      if (delegateResponse === BAKER_ADDRESS) {
        throw new Error('YOUR TOKENS ARE ALREADY DELEGATED TO THE SUPREME DALEK BAKER!');
      }

      // Execute delegation
      console.log('Initiating delegation...');
      const operation = await Tezos.wallet
        .setDelegate({
          delegate: BAKER_ADDRESS
        })
        .send();

      console.log('Operation hash:', operation.hash);
      setOperationHash(operation.hash);

      // Wait for confirmation
      await operation.confirmation(2);
      alert('DELEGATION SUCCESSFUL! YOUR ALLEGIANCE TO THE DALEKS IS CONFIRMED!');
    } catch (err) {
      console.error('Delegation error:', err);
      if (err.message.includes('not a function')) {
        setError('WALLET INTERFACE ERROR! THE DALEKS DEMAND YOU USE A COMPATIBLE WALLET!');
      } else if (err.message.includes('Network not supported')) {
        setError('INCORRECT NETWORK! SEOULNET IS REQUIRED FOR DELEGATION!');
      } else {
        setError(err.message || 'OPERATION FAILED! THE DALEKS DEMAND YOU TRY AGAIN!');
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) {
    return (
      <div className="my-8">
        <div className="flex justify-center">
          <div className="bg-yellow-600 text-black px-8 py-4 rounded-lg text-xl font-bold opacity-50 text-center">
            INITIALIZING DALEK SYSTEMS...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8">
      <div className="flex justify-center">
        <button
          onClick={handleDelegation}
          disabled={loading}
          className="bg-yellow-600 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-500 transition-colors disabled:opacity-50"
        >
          {loading ? 'PROCESSING DELEGATION...' : 'DELEGATE TO DALEKS!'}
        </button>
      </div>

      {error && (
        <p className="text-red-500 font-bold mt-4 text-center">{error}</p>
      )}

      {operationHash && (
        <div className="mt-4 text-center">
          <p className="text-yellow-500 mb-2">OPERATION CONFIRMED! VERIFY YOUR ALLEGIANCE:</p>
          <a
            href={`https://seoulnet.tzkt.io/${operationHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-500 underline"
          >
            EXAMINE OPERATION DETAILS!
          </a>
        </div>
      )}
    </div>
  );
};

export default DalekButtons;