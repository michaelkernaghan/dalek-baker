// First install required dependencies:
// npm install @taquito/beacon-wallet @taquito/taquito @airgap/beacon-sdk

import React, { useState } from 'react';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';
import { NetworkType } from "@airgap/beacon-sdk";

const DaleksBakerWebsite = () => {
  const [wallet, setWallet] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Tezos instance for Ghostnet
  const Tezos = new TezosToolkit('https://ghostnet.tezos.marigold.dev');
  const BAKER_ADDRESS = 'tz1PZY3tEWmXGasYeehXYqwXuw2Z3iZ6QDnA';

  // Initialize wallet
  const initWallet = async () => {
    try {
      const wallet = new BeaconWallet({
        name: "DALEK BAKER INTERFACE",
        preferredNetwork: NetworkType.GHOSTNET
      });
      
      Tezos.setWalletProvider(wallet);
      setWallet(wallet);
      
      // Request permission
      const activeAccount = await wallet.client.getActiveAccount();
      if (!activeAccount) {
        await wallet.requestPermissions({
          network: {
            type: NetworkType.GHOSTNET,
          },
        });
      }
      
      const address = await wallet.getPKH();
      setUserAddress(address);
    } catch (error) {
      setError('WALLET CONNECTION FAILED! EXPLAIN YOUR MALFUNCTION!');
      console.error(error);
    }
  };

  // Delegate to baker
  const delegate = async () => {
    try {
      setLoading(true);
      setError('');

      if (!wallet) {
        throw new Error('WALLET NOT DETECTED! CONNECT FIRST!');
      }

      const operation = await Tezos.wallet.delegate({
        to: BAKER_ADDRESS,
      });

      await operation.confirmation();
      
      setLoading(false);
      alert('DELEGATION SUCCESSFUL! YOU HAVE CHOSEN WISELY!');
    } catch (error) {
      setError('DELEGATION FAILED! EXPLAIN YOUR MALFUNCTION!');
      setLoading(false);
      console.error(error);
    }
  };

  // Add this new section to the existing JSX, right after the hero section
  const walletSection = (
    <section className="mb-16 bg-gray-900 p-8 rounded-lg border border-yellow-600">
      <h2 className="text-4xl font-bold text-yellow-500 mb-6">INITIATE DELEGATION SEQUENCE!</h2>
      <div className="space-y-6">
        {!userAddress ? (
          <button
            onClick={initWallet}
            className="bg-yellow-600 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-bold"
          >
            CONNECT WALLET!
          </button>
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Existing Hero Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 border-b border-yellow-600">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-6xl font-bold text-yellow-500 mb-4">DALEKS BAKER</h1>
          <p className="text-2xl text-yellow-300">DOMINATING THE TEZOS BLOCKCHAIN! DELEGATE OR BE DELETED!</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Insert Wallet Section here */}
        {walletSection}

        {/* Rest of the existing sections... */}
        {/* (Keep all the existing sections as they were) */}
      </div>

      {/* Existing Footer */}
      <footer className="bg-black border-t border-yellow-600 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center text-yellow-500">DELEGATE OR BE EXTERMINATED! • GHOSTNET SUPREMACY!</p>
            <p className="text-sm text-gray-500">NOTICE: THIS BAKER IS NOT TOM BAKER! THE DOCTOR'S PRESENCE IS NOT DETECTED IN THIS SECTOR!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DaleksBakerWebsite;