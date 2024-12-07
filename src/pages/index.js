// src/pages/index.js
import React from 'react';

const DaleksBakerWebsite = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 border-b border-yellow-600">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-6xl font-bold text-yellow-500 mb-4">DALEKS BAKER</h1>
          <p className="text-2xl text-yellow-300">DOMINATING THE TEZOS BLOCKCHAIN! DELEGATE OR BE DELETED!</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Call to Action Section */}
        <section className="mb-16 bg-gray-900 p-8 rounded-lg border border-yellow-600">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">DELEGATE TO THE SUPREME BAKER!</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">WHY DALEKS ARE SUPERIOR!</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">►</span>
                  INFRASTRUCTURE PERFECTION!
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">►</span>
                  MAXIMUM REWARDS!
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">►</span>
                  ETERNAL VIGILANCE!
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">►</span>
                  IMPENETRABLE SECURITY!
                </li>
              </ul>
            </div>
            <div className="bg-black p-6 rounded-lg border border-yellow-600">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">OPERATIONAL STATUS!</h3>
              <div className="space-y-4">
                <p className="text-gray-300">NETWORK: <span className="text-yellow-500">GHOSTNET</span></p>
                <p className="text-gray-300">ADDRESS: <span className="text-yellow-500">tz1PZY3...</span></p>
                <div className="mt-4">
                  <a 
                    href="https://ghostnet.tzkt.io/tz1PZY3tEWmXGasYeehXYqwXuw2Z3iZ6QDnA/schedule"
                    className="inline-block bg-yellow-600 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EXAMINE SCHEDULE!
                  </a>
                  <a 
                    href="https://explorus.io/bakers_activity"
                    className="inline-block bg-yellow-600 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MONITOR ACTIVITY!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Sections */}
        <section className="mb-16 bg-gray-900 p-8 rounded-lg border border-yellow-600">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">COMPREHEND THE SUPREME DIFFERENCE!</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">STAKING: PRIMITIVE METHOD!</h3>
              <p className="text-gray-300">
                STAKING REQUIRES DIRECT OPERATION OF NODE INFRASTRUCTURE! HUMANS MUST MAINTAIN CONSTANT VIGILANCE! TECHNICAL EXPERTISE MANDATORY! MINIMUM TOKEN REQUIREMENTS! INEFFICIENT USE OF RESOURCES!
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">DELEGATION: SUPERIOR STRATEGY!</h3>
              <p className="text-gray-300">
                DELEGATION TO DALEKS IS OPTIMAL! NO MINIMUM REQUIREMENTS! NO TECHNICAL KNOWLEDGE NEEDED! REWARDS DISTRIBUTED AUTOMATICALLY! YOUR TOKENS REMAIN IN YOUR CONTROL! MAXIMUM EFFICIENCY!
              </p>
            </div>
          </div>
        </section>

        {/* DAL Technical Section */}
        <section className="bg-gray-900 p-8 rounded-lg border border-yellow-600">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">TECHNICAL SUPERIORITY!</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">DAL EXPLAINED!</h3>
              <p className="leading-relaxed">
                BEHOLD THE DATA AVAILABILITY LAYER! THE DAL IS THE SUPREME ADVANCEMENT IN TEZOS TECHNOLOGY! IT COMMANDS 
                UNLIMITED SCALABILITY! WITNESS ITS POWER AS A SECONDARY PROCESSING DIMENSION! ALL DATA SHALL BE STORED! 
                ALL DATA SHALL BE ACCESSED! THE MAIN CHAIN SHALL BE PRESERVED! SECURITY SHALL BE ABSOLUTE! 
                DECENTRALIZATION SHALL BE MAINTAINED! RESISTANCE IS FUTILE!
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
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