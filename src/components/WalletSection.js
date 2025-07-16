import React, { useState, useEffect } from 'react';

const WalletSection = () => {
  const [wallet, setWallet] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tezos, setTezos] = useState(null);
  const BAKER_ADDRESS = 'tz1PZY3tEWmXGasYeehXYqwXuw2Z3iZ6QDnA';

  // Initialize Tezos on component mount
  useEffect(() => {
    const loadTezos = async () => {
      try {
        const { TezosToolkit } = await import('@taquito/taquito');
        const instance = new TezosToolkit('https://rpc.seoulnet.teztnets.xyz');
        setTezos(instance);
      } catch (err) {
        console.error('Failed to load Tezos:', err);
        setError('TEZOS INITIALIZATION FAILED!');
      }
    };

    loadTezos();
  }, []);

  const initWallet = async () => {
    try {
      setLoading(true);
      const { BeaconWallet } = await import('@taquito/beacon-wallet');
      const { NetworkType } = await import('@airgap/beacon-sdk');

      const walletInstance = new BeaconWallet({
        name: "DALEK BAKER INTERFACE",
        preferredNetwork: NetworkType.CUSTOM
      });

      if (tezos) {
        tezos.setWalletProvider(walletInstance);
        setWallet(walletInstance);

        // Request permissions
        await walletInstance.requestPermissions({
          network: {
            type: NetworkType.CUSTOM,
            name: 'seoulnet',
            rpcUrl: 'https://rpc.seoulnet.teztnets.xyz',
          },
        });

        const address = await walletInstance.getPKH();
        setUserAddress(address);
      }
    } catch (err) {
      console.error('Wallet connection failed:', err);
      setError('WALLET CONNECTION FAILED! EXPLAIN YOUR MALFUNCTION!');
    } finally {
      setLoading(false);
    }
  };

  const delegate = async () => {
    if (!wallet || !tezos) {
      setError('WALLET NOT DETECTED! CONNECT FIRST!');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const operation = await tezos.wallet.delegate({
        to: BAKER_ADDRESS,
      });

      await operation.confirmation();
      alert('DELEGATION SUCCESSFUL! YOU HAVE CHOSEN WISELY!');
    } catch (err) {
      console.error('Delegation failed:', err);
      setError('DELEGATION FAILED! EXPLAIN YOUR MALFUNCTION!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mb-16 bg-gray-900 p-8 rounded-lg border border-yellow-600">
      <h2 className="text-4xl font-bold text-yellow-500 mb-6">INITIATE DELEGATION SEQUENCE!</h2>
      <div className="space-y-6">
        {!userAddress ? (
          <div className="space-y-4">
            <button
              onClick={initWallet}
              disabled={loading || !tezos}
              className="bg-yellow-600 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-bold disabled:opacity-50"
            >
              {loading ? 'CONNECTING...' : 'CONNECT WALLET!'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-300">CONNECTED ADDRESS: <span className="text-yellow-500">{userAddress}</span></p>
            <button
              onClick={delegate}
              disabled={loading}
              className="bg-yellow-600 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-bold disabled:opacity-50"
            >
              {loading ? 'PROCESSING...' : 'DELEGATE NOW!'}
            </button>
          </div>
        )}
        {error && (
          <p className="text-red-500 font-bold mt-4">{error}</p>
        )}
      </div>
    </section>
  );
};

export default WalletSection;