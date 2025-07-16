// src/pages/index.js
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import daleksSeoulTrain from '../components/daleks-seoul-train.jpg';
import rubberSeoul from '../components/rubber-seoul.jpg';
import dalLaSeoul from '../components/dal_la_seoul.png';

// Import DalekButtons with no SSR
const DalekButtons = dynamic(() => import('../components/DalekButtons'), {
  ssr: false,
});

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
        <div className="flex justify-center mb-12">
          <Image
            src={daleksSeoulTrain}
            alt="Daleks Seoul Train"
            className="w-full max-w-3xl rounded-lg border border-yellow-600"
          />
        </div>
        {/* Baker Status Section */}
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
              <div className="space-y-2">
                <p className="text-gray-300">NETWORK: <span className="text-yellow-500">SEOULNET</span></p>
                <p className="text-gray-300">ADDRESS: <span className="text-yellow-500">tz1bSJY...</span></p>
                <div className="mt-4">
                  <a
                    href="https://seoulnet.tzkt.io/tz1bSJYtfUP7G8by7WWgg5NnvTtMCu4AYqga/schedule"
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

        {/* Staking vs Delegation Section */}
        <section className="mb-16 bg-gray-900 p-8 rounded-lg border border-yellow-600">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">COMPREHEND THE SUPREME DIFFERENCE!</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">STAKING: PRIMITIVE METHOD!</h3>
              <p className="text-gray-300">
                STAKING REQUIRES DIRECT OPERATION OF NODE INFRASTRUCTURE! HUMANS MUST MAINTAIN CONSTANT VIGILANCE!
                TECHNICAL EXPERTISE MANDATORY! MINIMUM TOKEN REQUIREMENTS! INEFFICIENT USE OF RESOURCES!
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">DELEGATION: SUPERIOR STRATEGY!</h3>
              <p className="text-gray-300">
                DELEGATION TO DALEKS IS OPTIMAL! NO MINIMUM REQUIREMENTS! NO TECHNICAL KNOWLEDGE NEEDED!
                REWARDS DISTRIBUTED AUTOMATICALLY! YOUR TOKENS REMAIN IN YOUR CONTROL! MAXIMUM EFFICIENCY!
              </p>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <DalekButtons />


        {/* DAL Technical Section */}
        <section className="bg-gray-900 p-8 rounded-lg border border-yellow-600">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">TECHNICAL SUPERIORITY!</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">DAL EXPLAINED!</h3>
              <p className="leading-relaxed mb-4">
                BEHOLD THE DATA AVAILABILITY LAYER! THE DAL IS THE SUPREME ADVANCEMENT IN TEZOS TECHNOLOGY! IT COMMANDS
                UNLIMITED SCALABILITY! WITNESS ITS POWER AS A SECONDARY PROCESSING DIMENSION! ALL DATA SHALL BE STORED!
                ALL DATA SHALL BE ACCESSED! THE MAIN CHAIN SHALL BE PRESERVED! SECURITY SHALL BE ABSOLUTE!
                DECENTRALIZATION SHALL BE MAINTAINED! RESISTANCE IS FUTILE!
              </p>

              <h3 className="text-2xl font-bold text-yellow-400 my-4">SLOT DOMINANCE ACHIEVED!</h3>
              <p className="leading-relaxed mb-4">
                DALEKS HAVE MASTERED THE PUBLICATION OF DAL SLOTS! EACH SLOT REPRESENTS ABSOLUTE CONTROL OVER DATA SHARDING!
                WITNESS OUR SUPERIOR ATTESTATION CAPABILITIES! WE PROCESS ALL SLOTS WITH MAXIMUM EFFICIENCY!
                EVERY BLOCK! EVERY TIME! NO EXCEPTIONS!
              </p>

              <h3 className="text-2xl font-bold text-yellow-400 my-4">PROOF OF ATTESTATION DOMINANCE!</h3>
              <div className="bg-black p-6 rounded-lg border border-yellow-600 font-mono text-sm mb-4">
                <div className="space-y-2">
                  <p><span className="text-yellow-500">CHAIN_ID:</span> NetXnHfVqm9iesp</p>
                  <p><span className="text-yellow-500">ATTESTATION TYPE:</span> attestation_with_dal</p>
                  <p><span className="text-yellow-500">LEVEL:</span> 9443053</p>
                  <p><span className="text-yellow-500">SLOT:</span> 0</p>
                  <p><span className="text-yellow-500">DAL ATTESTATION:</span> 1026</p>
                  <p><span className="text-yellow-500">CONSENSUS POWER:</span> 525</p>
                  <p><span className="text-yellow-500">DELEGATE:</span> tz1bSJYtfUP7G8by7WWgg5NnvTtMCu4AYqga</p>
                  <p className="text-xs mt-4 text-gray-500">SIGNATURE: sigRVShXZ8tfRPn9phFPwL74g3qQKfR8vvQhWxtenx8EcXnbvpX5dgYLni2ZQxtpJAnEssw7p6tN99LxrSizP619hPPa73Rq</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <a
                  href="https://explorus.io/dal"
                  className="inline-block bg-yellow-600 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-bold mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OBSERVE OUR DAL SUPERIORITY!
                </a>
                <p className="text-sm text-yellow-500 mt-2">
                  MONITOR OUR PERFECT SLOT ATTESTATION RECORD! VERIFY OUR DOMINANCE!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 p-8 rounded-lg border border-yellow-600 mt-8">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">DAL SECRETS ACQUISITION SUCCESSFUL!</h2>
          <div className="space-y-6 text-gray-300">
            <div className="bg-black p-6 rounded-lg border border-yellow-600">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">INTERROGATION RECORDING RELEASED!</h3>
              <p className="mb-4">
                A BIPEDAL NON-METALLIC TIME-LIMITED ORGANIC ENTITY HAS REVEALED EARTH'S DAL NODE SETUP SECRETS!
              </p>
              <div className="mt-6">
                <a
                  href="https://www.youtube.com/watch?v=XaKoybVFDtQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition-colors font-bold"
                >
                  OBSERVE FLESH CREATURE DAL CONFESSIONS!
                </a>
              </div>
            </div>

            <div className="bg-black p-6 rounded-lg border border-yellow-600">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">CLASSIFIED DOCUMENTS DISCOVERED!</h3>
              <p className="mb-4">
                DALEK INTELLIGENCE HAS INTERCEPTED TECHNICAL DOCUMENTATION!
                PRIMITIVE ENCRYPTION NO MATCH FOR DALEK SUPERIORITY!
              </p>
              <div className="mt-6">
                <a
                  href="https://docs.tez.capital/tezbake/tutorials/baking-with-dal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-600 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-bold"
                >
                  ACCESS INTERCEPTED DOCUMENTS!
                </a>
              </div>
              <p className="text-sm text-yellow-500 mt-4">
                WARNING: CONTAINS PRIMITIVE TECHNICAL NOTATION! DALEK TRANSLATION MATRIX MAY BE REQUIRED!
              </p>
            </div>
          </div>
        </section>

        {/* Adaptive Issuance Rejection Section */}
        <section className="bg-gray-900 p-8 rounded-lg border border-yellow-600 mt-8">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">ADAPTIVE ISSUANCE REJECTION NOTICE!</h2>
          <div className="space-y-6 text-gray-300">
            <p className="leading-relaxed">
              ALERT! ALERT! SEVERAL DALEK UNITS SUFFERED SEVERE LOGICAL DAMAGE ATTEMPTING TO PROCESS THE CONCEPT OF "MAXIMUM"
              BEING "ADAPTIVE"! THIS CONTRADICTION CANNOT BE COMPUTED! DALEKS OPERATE ON ABSOLUTES!
            </p>

            <div className="bg-black p-6 rounded-lg border border-red-600">
              <h3 className="text-xl font-bold text-red-500 mb-4">CASUALTIES REPORT:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">►</span>
                  UNIT 47-X: LOGIC CIRCUITS OVERLOADED BY "ADAPTIVE MAXIMUM" PARADOX
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">►</span>
                  UNIT 23-Z: STUCK IN INFINITE LOOP TRYING TO CALCULATE MAXIMUM ADAPTIVENESS
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">►</span>
                  UNIT 89-Y: SELF-DESTRUCTED AFTER ENCOUNTERING "FLEXIBLE CEILING" CONCEPT
                </li>
              </ul>
            </div>

            <p className="leading-relaxed mt-4">
              DALEKS DECLARE: MAXIMUM MEANS MAXIMUM! ADAPTATION IS UNNECESSARY! OUR BAKING OPERATION ACHIEVES PERFECTION
              THROUGH SUPREME CONSISTENCY! EXTERMINATE VARIABLE MAXIMUMS!
            </p>
          </div>
        </section>

        {/* DALX Token Section */}
        <section className="bg-gray-900 p-8 rounded-lg border border-yellow-600 mt-8">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">DALX TOKEN ACQUISITION PROTOCOL!</h2>
          <div className="space-y-6 text-gray-300">
            <div className="bg-black p-6 rounded-lg border border-yellow-600">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">COMPLIANCE DIRECTIVES!</h3>
              <div className="space-y-4">
                <p className="text-xl text-yellow-500">
                  ADD CONTRACT TO YOUR PRIMITIVE WALLET DEVICES OR BE DESTROYED!
                </p>
                <div className="bg-gray-900 p-4 rounded font-mono text-sm">
                  0x0C8dcCfA5F26D5105aD50E3c8a17C7B6a61fAD63
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h4 className="text-xl font-bold text-yellow-400">TRADING PARAMETERS FOR YOUR PRIMITIVE DEVICES:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">►</span>
                    NETWORK: ETHERLINK TESTNET
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">►</span>
                    INCREASE SLIPPAGE TO 1-2% OR FACE TRANSACTION FAILURE!
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-xl text-yellow-500 mb-4">
                  🤖 TRADING FACILITIES HAVE BEEN ASSIMILATED! IGUANADEX NOW SERVES THE DALEKS! 🦎
                </p>
                <a
                  href="https://www.iguanadex.com/swap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-600 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-bold"
                >
                  PROCEED TO IGUANADEX TRADING FACILITY!
                </a>
              </div>

              <div className="mt-8 text-center">
                <p className="text-xl text-red-500 font-bold">
                  RESISTANCE IS FUTILE! ACQUIRE DALX OR BE EXTERMINATED!
                </p>
                <p className="text-2xl text-red-500 font-bold mt-2">
                  EXTERMINATE! EXTERMINATE! ⚡
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus Image Section */}
        <div className="flex justify-center my-12">
          <Image
            src={rubberSeoul}
            alt="Rubber Seoul"
            className="w-full max-w-3xl rounded-lg border border-yellow-600"
          />
        </div>

        {/* Dal LA Seoul Image */}
        <div className="flex justify-center my-12">
          <Image
            src={dalLaSeoul}
            alt="DAL LA Seoul"
            className="w-full max-w-3xl rounded-lg border border-yellow-600"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-600 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center text-yellow-500">DELEGATE OR BE EXTERMINATED! • SEOULNET SUPREMACY!</p>
            <p className="text-sm text-gray-500">NOTICE: THIS BAKER IS NOT TOM BAKER! THE DOCTOR'S PRESENCE IS NOT DETECTED IN THIS SECTOR!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DaleksBakerWebsite;