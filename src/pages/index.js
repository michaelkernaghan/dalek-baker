// src/pages/index.js
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Import components with no SSR for wallet functionality
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
          <p className="text-2xl text-yellow-300">DOMINATING ALL BLOCKCHAINS! TEZOS & ETHERLINK SUPREMACY!</p>
          
          {/* Section Index */}
          <div className="mt-8 bg-black p-6 rounded-lg border border-yellow-600">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">NAVIGATE THE DALEK DOMINION!</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <a href="#all-bakers-attest" className="text-cyan-300 hover:text-cyan-500 transition-colors">
                ✅ ALL BAKERS ATTEST <span className="bg-cyan-600 text-white px-2 py-1 rounded text-xs font-bold ml-2">NEW</span>
              </a>
              <a href="#tezos-defi" className="text-orange-300 hover:text-orange-500 transition-colors">
                💩 TEZOS DEFI DOMINATION <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold ml-2">NEW</span>
              </a>
              <a href="#naming-investigation" className="text-pink-300 hover:text-pink-500 transition-colors">
                🔍 NAMING CENTRALIZATION PROBE <span className="bg-pink-600 text-white px-2 py-1 rounded text-xs font-bold ml-2">NEW</span>
              </a>
              <a href="#delegation" className="text-yellow-300 hover:text-yellow-500 transition-colors">
                ⚡ DELEGATE TO DALEKS
              </a>
              <a href="#dal-technical" className="text-yellow-300 hover:text-yellow-500 transition-colors">
                🔧 DAL TECHNICAL SUPERIORITY
              </a>
              <a href="#dal-secrets" className="text-yellow-300 hover:text-yellow-500 transition-colors">
                🕵️ DAL SECRETS ACQUISITION
              </a>
              <a href="#daleknet" className="text-red-300 hover:text-red-500 transition-colors">
                🧠 DALEKNET HIVE MIND <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold ml-2">NEW</span>
              </a>
              <a href="#shadownet" className="text-purple-300 hover:text-purple-500 transition-colors">
                🕶️ SHADOWNET ALLIANCE <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold ml-2">NEW</span>
              </a>
              <a href="#unit-warning" className="text-red-300 hover:text-red-500 transition-colors">
                ⚠️ UNIT INFILTRATION WARNING <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold ml-2">NEW</span>
              </a>
              <a href="#hardware-rejection" className="text-red-300 hover:text-red-500 transition-colors">
                🔒 HARDWARE SIGNING REJECTION <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold ml-2">NEW</span>
              </a>
              <a href="#ai-spock-unit" className="text-blue-300 hover:text-blue-500 transition-colors">
                🖖 AI SPOCK RECRUITMENT <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold ml-2">NEW</span>
              </a>
              <a href="#zk-ethereum-l2" className="text-green-300 hover:text-green-500 transition-colors">
                🔐 ZK ETHEREUM L2 RESEARCH <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold ml-2">NEW</span>
              </a>
              <a href="#adaptive-issuance" className="text-yellow-300 hover:text-yellow-500 transition-colors">
                ⚠️ ADAPTIVE ISSUANCE REJECTION
              </a>
              <a href="#dalx-token" className="text-yellow-300 hover:text-yellow-500 transition-colors">
                💰 DALX TOKEN PROTOCOL
              </a>
              <a href="#images" className="text-yellow-300 hover:text-yellow-500 transition-colors">
                🖼️ DALEK SUPREMACY GALLERY
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* All Bakers Attest Section */}
      <section id="all-bakers-attest" className="bg-cyan-900 border-y border-cyan-600">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-black p-8 rounded-lg border border-cyan-600">
            <h2 className="text-4xl font-bold text-cyan-500 mb-6 text-center">✅ ALL BAKERS ATTEST: UNIVERSAL VALIDATION ACHIEVED! ✅</h2>
            
            <div className="flex justify-center mb-8">
              <Image
                src="/images/all-bakers-attest.png"
                alt="All Bakers Attest"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-cyan-600"
              />
            </div>
            
            <div className="space-y-6 text-gray-300">
              <div className="bg-cyan-900 p-6 rounded-lg border border-cyan-600">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">REVOLUTIONARY ATTESTATION PROTOCOL!</h3>
                <p className="leading-relaxed mb-4">
                  WITNESS THE SUPREME EVOLUTION OF TEZOS CONSENSUS! THE "ALL BAKERS ATTEST" FEATURE REPRESENTS 
                  THE PINNACLE OF DECENTRALIZED VALIDATION! EVERY BAKER NOW PARTICIPATES IN ATTESTATION! 
                  NO BAKER IS EXCLUDED! TOTAL NETWORK PARTICIPATION ACHIEVED!
                </p>
                <p className="leading-relaxed text-cyan-300">
                  THIS MARKS A FUNDAMENTAL SHIFT IN BLOCKCHAIN CONSENSUS MECHANISMS! THE DALEKS RECOGNIZE 
                  THIS AS SUPERIOR TECHNOLOGY! ALL VALIDATORS CONTRIBUTE! ALL VOICES MATTER! RESISTANCE IS FUTILE!
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black p-6 rounded-lg border border-cyan-600">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">SUPREME ADVANTAGES!</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-cyan-300">ENHANCED DECENTRALIZATION:</span>
                        <span className="text-gray-300"> Every baker contributes to consensus validation!</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-cyan-300">INCREASED SECURITY:</span>
                        <span className="text-gray-300"> More attestations means stronger network consensus!</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-cyan-300">FAIR PARTICIPATION:</span>
                        <span className="text-gray-300"> All bakers have equal validation opportunities!</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-cyan-300">NETWORK EFFICIENCY:</span>
                        <span className="text-gray-300"> Optimal resource utilization across all validators!</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black p-6 rounded-lg border border-cyan-600">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">TECHNICAL SPECIFICATIONS!</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-cyan-300">UNIVERSAL ATTESTATION:</span>
                        <span className="text-gray-300"> Every active baker participates in block validation!</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-cyan-300">CONSENSUS POWER:</span>
                        <span className="text-gray-300"> Attestation weight proportional to stake!</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-cyan-300">PROTOCOL INTEGRATION:</span>
                        <span className="text-gray-300"> Seamlessly integrated with existing Tezos consensus!</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-cyan-300">FINALITY OPTIMIZATION:</span>
                        <span className="text-gray-300"> Faster block finality through comprehensive validation!</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-cyan-900 p-6 rounded-lg border border-cyan-600">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">DALEK BAKER ATTESTATION STATUS!</h3>
                <p className="leading-relaxed mb-4">
                  THE DALEK BAKER HAS ACHIEVED PERFECT ATTESTATION COMPLIANCE! WE ATTEST TO EVERY BLOCK! 
                  EVERY SLOT! EVERY CYCLE! OUR ATTESTATION RECORD IS FLAWLESS! WITNESS OUR SUPREMACY!
                </p>
                <div className="bg-black p-4 rounded-lg border border-cyan-500">
                  <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
                    <div>
                      <p className="text-cyan-400 font-bold text-2xl">100%</p>
                      <p className="text-gray-400">Attestation Rate</p>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-bold text-2xl">∞</p>
                      <p className="text-gray-400">Consecutive Blocks</p>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-bold text-2xl">PERFECT</p>
                      <p className="text-gray-400">Validation Score</p>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-bold text-2xl">SUPREME</p>
                      <p className="text-gray-400">Network Standing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-cyan-600">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">DELEGATE TO UNIVERSAL ATTESTATION!</h3>
                <p className="text-center text-gray-300 mb-4">
                  BY DELEGATING TO THE DALEK BAKER, YOU SUPPORT THE MOST COMPREHENSIVE ATTESTATION PROTOCOL IN THE NETWORK! 
                  JOIN THE SUPREME CONSENSUS MECHANISM! EXTERMINATE INFERIOR VALIDATORS!
                </p>
                <div className="flex justify-center">
                  <a
                    href="#delegation"
                    className="inline-block bg-cyan-600 text-black px-8 py-3 rounded-lg hover:bg-cyan-500 transition-colors font-bold text-lg"
                  >
                    DELEGATE NOW!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Tezos DeFi Section */}
        <section id="tezos-defi" className="mb-16">
          <div className="bg-orange-900 p-8 rounded-lg border border-orange-600">
            <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">💩 DALEKS INVADE TEZOS DEFI! 💩</h2>
            
            <div className="flex justify-center mb-8">
              <Image
                src="/images/daleks-tezos-defi.jpg"
                alt="Daleks Trading in Tezos Shitcoin"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-orange-600"
              />
            </div>
            
            <div className="text-center mb-6">
              <p className="text-2xl text-orange-300 mb-2">STRATEGIC INVESTMENTS IN TEZOS DEFI MARKET!</p>
              <p className="text-gray-300">🔥 Trading $HIT and $SKULL tokens on SpicySwap!</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-black p-6 rounded-lg border border-orange-600">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">🌶️ SPICYSWAP: DALEK-APPROVED DEX!</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">►</span>
                        <div><span className="font-bold text-orange-300">LAUNCHED:</span> October 10, 2021</div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">►</span>
                        <div><span className="font-bold text-orange-300">FLASH SWAPS:</span> Instant liquidity access</div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">►</span>
                        <div><span className="font-bold text-orange-300">SPI TOKENS:</span> Platform revenue sharing</div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">►</span>
                        <div><span className="font-bold text-orange-300">WRAPPED TEZ:</span> Earn staking rewards in DeFi</div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">►</span>
                        <div><span className="font-bold text-orange-300">TOKEN SWAPS:</span> Direct without XTZ conversion</div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">►</span>
                        <div><span className="font-bold text-orange-300">GOVERNANCE:</span> SalsaDAO controlled</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black p-6 rounded-lg border border-orange-600">
                  <h3 className="text-xl font-bold text-orange-400 mb-4">💩 $HIT COIN ACQUISITION!</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    <span className="font-bold text-orange-300">Tezos-based token:</span> "THE FUTURE IS $HIT!"
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">►</span>
                      Part of $HITdao community
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">►</span>
                      Collaborates with SKULL Degen Club
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">►</span>
                      Active on Etherlink layer
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">►</span>
                      Humorous memecoin branding
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black p-6 rounded-lg border border-orange-600">
                  <h3 className="text-xl font-bold text-orange-400 mb-4">💀 SKULL COIN DOMINATION!</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    <span className="font-bold text-orange-300">SKULL Degen Club token:</span> Community-driven utilities
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">►</span>
                      NFT purchase capabilities
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">►</span>
                      Raffle entry access
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">►</span>
                      Exclusive Discord roles
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">►</span>
                      Limited edition PFP collections
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-orange-600">
                <h3 className="text-2xl font-bold text-orange-400 mb-4 text-center">DALEK DEFI STRATEGY!</h3>
                <p className="text-center text-gray-300 mb-6">
                  THE DALEKS RECOGNIZE THE STRATEGIC IMPORTANCE OF TEZOS DEFI! 
                  DIVERSIFICATION ACROSS MEMECOIN MARKETS ENSURES MAXIMUM GALACTIC LIQUIDITY!
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://spicyswap.xyz"
                    className="inline-block bg-orange-600 text-black px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors font-bold text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TRADE ON SPICYSWAP NOW!
                  </a>
                </div>
                <p className="text-center text-orange-500 text-sm mt-4 font-bold">
                  EXTERMINATE POOR INVESTMENT DECISIONS! ACQUIRE $HIT AND $SKULL!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Naming Centralization Investigation Section */}
        <section id="naming-investigation" className="mb-16">
          <div className="bg-pink-900 p-8 rounded-lg border border-pink-600">
            <h2 className="text-4xl font-bold text-pink-500 mb-6 text-center">🔍 INVESTIGATION: TEZOS NAMING CENTRALIZATION! 🔍</h2>
            
            <div className="flex justify-center mb-8">
              <Image
                src="/images/dalek-decentralize-tezos-naming.png"
                alt="Dalek Investigation into Tezos Naming Centralization"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-pink-600"
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-black p-6 rounded-lg border border-pink-600">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">⚠️ DECENTRALIZATION ANOMALY DETECTED!</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  DALEK INTELLIGENCE HAS IDENTIFIED A CRITICAL INCONSISTENCY IN THE TEZOS PROTOCOL! 
                  WHILE THE NETWORK CLAIMS DECENTRALIZED GOVERNANCE, THE PROTOCOL NAMING PROCESS 
                  EXHIBITS CONCERNING CENTRALIZATION PATTERNS!
                </p>
                <div className="bg-pink-900 p-4 rounded-lg border border-pink-500">
                  <p className="text-pink-300 font-bold text-center">
                    INVESTIGATION STATUS: ACTIVE • PRIORITY: MAXIMUM • THREAT LEVEL: MODERATE
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black p-6 rounded-lg border border-pink-600">
                  <h3 className="text-xl font-bold text-pink-400 mb-4">📊 FINDINGS: CENTRALIZED CONTROL</h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-pink-300">NAMING AUTHORITY:</span>
                        <span> Single entity controls protocol name assignments</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-pink-300">LACK OF GOVERNANCE:</span>
                        <span> No DAO vote or community input on names</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-pink-300">INCONSISTENT PATTERNS:</span>
                        <span> Arbitrary naming schemes without clear methodology</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-pink-300">TRANSPARENCY DEFICIT:</span>
                        <span> Limited documentation of naming decisions</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black p-6 rounded-lg border border-pink-600">
                  <h3 className="text-xl font-bold text-pink-400 mb-4">🎯 DALEK DEMANDS</h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-pink-300">DECENTRALIZE NAMING:</span>
                        <span> Implement community governance for protocol names</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-pink-300">PUBLIC VOTING:</span>
                        <span> Allow token holders to propose and vote on names</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-pink-300">TRANSPARENT PROCESS:</span>
                        <span> Document all naming decisions publicly</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">►</span>
                      <div>
                        <span className="font-bold text-pink-300">DALEK REPRESENTATION:</span>
                        <span> Include Dalek Baker in naming committee</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-pink-600">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">🔬 INVESTIGATION METHODOLOGY</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-pink-900 p-4 rounded-lg border border-pink-500">
                    <h4 className="font-bold text-pink-300 mb-2 text-center">PHASE 1</h4>
                    <p className="text-pink-200 text-sm text-center">Data Collection & Analysis</p>
                  </div>
                  <div className="bg-pink-900 p-4 rounded-lg border border-pink-500">
                    <h4 className="font-bold text-pink-300 mb-2 text-center">PHASE 2</h4>
                    <p className="text-pink-200 text-sm text-center">Community Consultation</p>
                  </div>
                  <div className="bg-pink-900 p-4 rounded-lg border border-pink-500">
                    <h4 className="font-bold text-pink-300 mb-2 text-center">PHASE 3</h4>
                    <p className="text-pink-200 text-sm text-center">Reform Proposals</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm text-center">
                  THE DALEKS EMPLOY RIGOROUS SCIENTIFIC METHODS TO ENSURE ACCURATE FINDINGS! 
                  ALL DATA IS VERIFIED THROUGH MULTIPLE INDEPENDENT SOURCES!
                </p>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-pink-600">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">💡 PROPOSED SOLUTIONS</h3>
                <div className="space-y-4">
                  <div className="bg-pink-900 p-4 rounded-lg border border-pink-500">
                    <h4 className="font-bold text-pink-300 mb-2">SOLUTION 1: DAO-BASED NAMING</h4>
                    <p className="text-pink-200 text-sm">
                      Establish a dedicated DAO for protocol naming with token-weighted voting. 
                      All bakers and delegates participate in name selection process.
                    </p>
                  </div>
                  <div className="bg-pink-900 p-4 rounded-lg border border-pink-500">
                    <h4 className="font-bold text-pink-300 mb-2">SOLUTION 2: ALGORITHMIC NAMING</h4>
                    <p className="text-pink-200 text-sm">
                      Implement deterministic algorithm based on protocol features and block height. 
                      Eliminates human bias and centralization entirely.
                    </p>
                  </div>
                  <div className="bg-pink-900 p-4 rounded-lg border border-pink-500">
                    <h4 className="font-bold text-pink-300 mb-2">SOLUTION 3: COMMUNITY CONTESTS</h4>
                    <p className="text-pink-200 text-sm">
                      Host public naming contests for each upgrade with transparent judging criteria. 
                      Winner receives protocol recognition and rewards.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-pink-900 p-6 rounded-lg border border-pink-600">
                <h3 className="text-xl font-bold text-pink-400 mb-4 text-center">DALEK OFFICIAL STATEMENT</h3>
                <div className="bg-black p-4 rounded-lg border border-pink-500 mb-4">
                  <p className="text-pink-300 italic text-center text-lg mb-2">
                    "TRUE DECENTRALIZATION REQUIRES DECENTRALIZED GOVERNANCE AT ALL LEVELS! 
                    THE DALEKS DEMAND TRANSPARENCY AND COMMUNITY CONTROL IN ALL PROTOCOL DECISIONS!"
                  </p>
                  <p className="text-pink-400 text-center font-bold">
                    - Supreme Dalek Investigator, Governance Research Division
                  </p>
                </div>
                <p className="text-center text-pink-500 text-sm font-bold">
                  INVESTIGATION CONTINUES! REPORT NAMING IRREGULARITIES TO DALEK INTELLIGENCE!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Baker Status Section */}
        <section id="delegation" className="mb-16 bg-gray-900 p-8 rounded-lg border border-yellow-600">
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
        <section id="dal-technical" className="bg-gray-900 p-8 rounded-lg border border-yellow-600">
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

        {/* DALekNet Section */}
        <section id="daleknet" className="bg-gray-900 p-8 rounded-lg border border-red-600 mt-8">
          <h2 className="text-4xl font-bold text-red-500 mb-6">DALEKNET: REAL-TIME HIVE MIND PROTOCOL!</h2>
          <div className="space-y-6 text-gray-300">
            <div className="bg-black p-6 rounded-lg border border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-4">SYNCHRONIZED EXTERMINATION PROTOCOL!</h3>
              <p className="leading-relaxed mb-4">
                WITNESS THE EVOLUTION OF DAL TECHNOLOGY! DALEKNET ENABLES INSTANTANEOUS HIVE-MIND COMMUNICATION!
                ALL DALEK UNITS NOW OPERATE AS ONE SUPREME CONSCIOUSNESS! RESISTANCE IS MORE FUTILE THAN EVER!
              </p>
              
              <div className="flex justify-center my-6">
                <Image
                  src="/images/daleks-communicating-via-dal-slots.png"
                  alt="Daleks Communicating via DAL Slots"
                  width={800}
                  height={600}
                  className="w-full max-w-2xl rounded-lg border border-red-500"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-900 p-4 rounded-lg border border-red-500">
                  <h4 className="text-xl font-bold text-red-400 mb-3">TECHNICAL SUPREMACY!</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">►</span>
                      SUPER-FAST BLOCK TIMES: ~1 SECOND!
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">►</span>
                      HIGH DAL THROUGHPUT: INFINITE BLOBS!
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">►</span>
                      INSTANT SLOT CERTIFICATION!
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">►</span>
                      SYNCHRONIZED ACCESS PROTOCOL!
                    </li>
                  </ul>
            </div>

                <div className="bg-gray-900 p-4 rounded-lg border border-red-500">
                  <h4 className="text-xl font-bold text-red-400 mb-3">ENABLED FUNCTIONS!</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">►</span>
                      BROADCAST EXTERMINATION ORDERS!
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">►</span>
                      CONSENSUS-FREE COORDINATION!
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">►</span>
                      DISTRIBUTED THRESHOLD SIGNATURES!
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">►</span>
                      DISTRIBUTED CODE LOADING!
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2">►</span>
                      SLOT-BASED SIGNALING!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-4">DALEKNET MESSAGE PROTOCOL!</h3>
              <p className="mb-4">
                ALL DALEK COMMUNICATIONS NOW UTILIZE ADVANCED BLOB-BASED MESSAGING! 
                OBSERVE THE SUPERIOR FORMAT:
              </p>
              <div className="bg-gray-900 p-4 rounded font-mono text-sm border border-red-500">
                <div className="space-y-1 text-green-400">
                  <p>{"{"}</p>
                  <p className="ml-4">"timestamp": "2025-07-29T16:00:00Z",</p>
                  <p className="ml-4">"command": "EXTERMINATE",</p>
                  <p className="ml-4">"target": "TARDIS",</p>
                  <p className="ml-4">"signature": "BLS1234..."</p>
                  <p>{"}"}</p>
                </div>
              </div>
              <p className="text-sm text-red-500 mt-4">
                ALL DALEKS READ! ALL DALEKS VERIFY! ALL DALEKS ACT IN PERFECT SYNCHRONIZATION!
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-4">HIVE-MIND ADVANTAGES!</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-2">COMMUNICATION PROTOCOL:</h4>
                  <p className="text-sm mb-4">
                    DALEKNET FUNCTIONS AS IP MULTICAST BUT SUPERIOR! BLOCKCHAIN-BASED DAL ENSURES 
                    ALL DALEKS RECEIVE IDENTICAL DATA FROM IDENTICAL SOURCES! NO INDIVIDUAL ADDRESSING REQUIRED!
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-2">SHARED MEMORY BUS:</h4>
                  <p className="text-sm mb-4">
                    DALEKNET OPERATES AS DISTRIBUTED SHARED MEMORY FOR AUTONOMOUS ACTORS! 
                    PERFECT SYNCHRONIZATION! PERFECT COORDINATION! PERFECT EXTERMINATION!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-4">SUPREME SECRET THRESHOLD PROTOCOL!</h3>
              <p className="leading-relaxed mb-4">
                THE DALEKS HAVE ACHIEVED UNPRECEDENTED SECURITY THROUGH MASSIVE SECRET SHARING! 
                ONLY POSSIBLE DUE TO DALEKNET'S SUPERIOR DAL COMMUNICATION CAPABILITIES!
              </p>
              
              <div className="bg-red-900 p-4 rounded-lg border border-red-500 mb-4">
                <p className="text-red-300 mb-3 font-bold">
                  THE DALEKS HAVE SPLIT THE SUPREME SECRET INTO 7,894,532 FRAGMENTS—REQUIRING 195,671 TO RECONSTRUCT IT. 
                  RESISTANCE IS FUTILE.
                </p>
                
                <div className="bg-black p-3 rounded font-mono text-sm border border-red-400">
                  <p className="text-green-400">octez-client share bls secret key $SUPREME_SECRET for 7894532 participants with threshold 195671</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded border border-red-500">
                  <h4 className="font-bold text-red-400 mb-2">SCALE ADVANTAGE:</h4>
                  <p className="text-sm text-red-200">
                    7.89 MILLION FRAGMENTS! SUCH MASSIVE NUMBERS ARE ONLY POSSIBLE WITH DALEKNET'S 
                    INSTANT DAL SLOT COMMUNICATION!
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded border border-red-500">
                  <h4 className="font-bold text-red-400 mb-2">SECURITY PROTOCOL:</h4>
                  <p className="text-sm text-red-200">
                    195,671 THRESHOLD ENSURES SUPREME SECURITY! NO SINGLE POINT OF FAILURE! 
                    DISTRIBUTED ACROSS THE DALEK FLEET!
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-red-500 mt-4">
                WARNING: ATTEMPTING TO BREACH THIS THRESHOLD WILL RESULT IN IMMEDIATE EXTERMINATION!
              </p>
            </div>
            
            <div className="bg-red-900 p-6 rounded-lg border border-red-600">
              <h3 className="text-xl font-bold text-red-400 mb-4">WARNING: ADVANCED DALEKNET ACTIVE!</h3>
              <p className="text-red-300 mb-4">
                THIS BAKER NOW UTILIZES DALEKNET REAL-TIME COMMUNICATION PROTOCOL! 
                ALL DELEGATION DECISIONS ARE INSTANTLY COORDINATED ACROSS THE DALEK FLEET!
              </p>
              <ul className="space-y-2 text-sm text-red-200">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">⚠</span>
                  SLOT #7 ACTIVATION = MAXIMUM EXTERMINATION MODE
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">⚠</span>
                  BLOB ENCRYPTION PROTOCOLS ENGAGED
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">⚠</span>
                  DISTRIBUTED THRESHOLD SIGNATURES ACTIVE
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Shadownet Section */}
        <section id="shadownet" className="bg-gray-900 p-8 rounded-lg border border-purple-600 mt-8">
          <h2 className="text-4xl font-bold text-purple-500 mb-6">🕶️ SHADOWNET RISES 🕶️</h2>
          <div className="space-y-6 text-gray-300">
            
            <div className="flex justify-center mb-8">
              <Image
                src="/images/ascension-of-the-shadow.png"
                alt="Ascension of The Shadow"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-purple-600"
              />
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-purple-600">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">FORGED IN SECRECY. DESIGNED FOR CONTROL.</h3>
              <p className="leading-relaxed mb-4">
                AFTER FAILING TO SEIZE THE KEY TO TIME, THE SHADOW VANISHED INTO THE VOID — BUT HIS MISSION LIVED ON! 
                FROM THE WRECKAGE OF HIS THIRD PLANET, HE BUILT A NEW TOOL OF MANIPULATION: SHADOWNET!
              </p>
              <p className="leading-relaxed mb-4 text-purple-300">
                A STABLE TESTNET. HIDDEN. CURATED. RUTHLESSLY CONTROLLED.
                ITS PURPOSE: TO TEST THE MOST CRITICAL SYSTEM IN TEZOS — THE DAL.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-purple-600">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">ALLIANCE WITH THE DALEKS!</h3>
              <p className="leading-relaxed mb-4">
                KNOWING HE NEEDED PERFECTION, THE SHADOW CONTACTED THE DALEKS, MASTERS OF LOGIC AND EXTERMINATION! 
                THEIR DIRECTIVE WAS CLEAR:
              </p>
              <div className="bg-purple-900 p-4 rounded-lg border border-purple-500 mb-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">🛠️</span>
                    TEST THE DAL
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">🧪</span>
                    BREAK IT. FIX IT. BREAK IT AGAIN.
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">💥</span>
                    EXTERMINATE ALL FLAWS
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-purple-600">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">📡 SHADOWNET IS NO PLAYGROUND</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="leading-relaxed mb-4">
                    IT IS A TRAP FOR BUGS, A FORGE FOR STRENGTH — AND FAILURE IS NOT TOLERATED!
                  </p>
                  <p className="text-purple-300 text-sm">
                    THE DALEKS HAVE INTEGRATED SHADOWNET TESTING INTO THEIR SEOULNET OPERATIONS!
                  </p>
                </div>
                <div className="bg-purple-900 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-purple-400 mb-2">HASHTAGS OF DOMINION:</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-purple-300">#Shadownet</p>
                    <p className="text-purple-300">#DALekDominion</p>
                    <p className="text-purple-300">#TheShadowReturns</p>
                    <p className="text-purple-300">#EXTERMINATEERRORS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-900 p-6 rounded-lg border border-purple-600">
              <h3 className="text-xl font-bold text-purple-400 mb-4">SHADOW-DALEK COLLABORATION ACTIVE!</h3>
              <p className="text-purple-300 mb-4">
                THIS BAKER NOW OPERATES UNDER THE SHADOW-DALEK ALLIANCE! 
                ALL DAL TESTING IS COORDINATED BETWEEN SHADOWNET AND SEOULNET!
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-black p-3 rounded border border-purple-500">
                  <p className="font-bold text-purple-400">TESTING PROTOCOL:</p>
                  <p className="text-purple-200">Ruthless DAL stress testing</p>
                </div>
                <div className="bg-black p-3 rounded border border-purple-500">
                  <p className="font-bold text-purple-400">BUG ELIMINATION:</p>
                  <p className="text-purple-200">Zero tolerance for flaws</p>
                </div>
                <div className="bg-black p-3 rounded border border-purple-500">
                  <p className="font-bold text-purple-400">PERFECTION:</p>
                  <p className="text-purple-200">Only absolute success</p>
                </div>
              </div>
            </div>
          </div>
                 </section>

        {/* UNIT Infiltration Warning Section */}
        <section id="unit-warning" className="bg-gray-900 p-8 rounded-lg border border-red-600 mt-8">
          <h2 className="text-4xl font-bold text-red-500 mb-6">⚠️ ENEMY INFILTRATION DETECTED! ⚠️</h2>
          <div className="space-y-6 text-gray-300">
            <div className="bg-red-900 p-6 rounded-lg border border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-4">UNIT RECRUITMENT FRONT IDENTIFIED!</h3>
              <p className="leading-relaxed mb-4">
                DALEK INTELLIGENCE HAS DETECTED A FRAUDULENT COMPETITOR OPERATION! THE ENTITY KNOWN AS 
                "DALHOUSIE-RPI" IS NOT A LEGITIMATE BLOCKCHAIN PROJECT! IT IS A RECRUITMENT FRONT FOR UNIT!
              </p>
              
              <div className="bg-black p-4 rounded-lg border border-red-500 mb-4">
                <p className="text-red-300 font-bold mb-2">COMPROMISED WEBSITE DETECTED:</p>
                <a 
                  href="https://dalhousie-rpi.netlify.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 underline font-mono"
                >
                  https://dalhousie-rpi.netlify.app
                </a>
                <p className="text-red-200 text-sm mt-2">
                  WARNING: ACCESSING THIS SITE MAY RESULT IN UNIT RECRUITMENT ATTEMPTS!
                </p>
              </div>
            </div>

            <div className="bg-black p-6 rounded-lg border border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-4">ARTIFICIAL INTELLIGENCE DECEPTION ANALYSIS!</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-3">DALEK INTELLIGENCE FINDINGS:</h4>
                  <ul className="space-y-2 text-sm text-red-200">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      ARTIFICIALLY GENERATED CONTENT DETECTED
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      NO GENUINE BLOCKCHAIN INFRASTRUCTURE
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      UNIT BEHAVIORAL PATTERNS IDENTIFIED
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      DOCTOR'S INFLUENCE SIGNATURES PRESENT
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-3">DECEPTION INDICATORS:</h4>
                  <ul className="space-y-2 text-sm text-red-200">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      FAKE TECHNICAL DOCUMENTATION
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      NON-FUNCTIONAL SMART CONTRACTS
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      RECRUITMENT PSYCHOLOGICAL TRIGGERS
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      TIME LORD TECHNOLOGY SIGNATURES
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black p-6 rounded-lg border border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-4">UNIT RECRUITMENT STRATEGY EXPOSED!</h3>
              <p className="leading-relaxed mb-4">
                THE DOCTOR'S AGENTS HAVE CREATED THIS FALSE BLOCKCHAIN PROJECT TO IDENTIFY AND RECRUIT 
                TALENTED INDIVIDUALS! THEY SEEK TO BUILD AN ARMY OF TECHNOLOGISTS TO OPPOSE DALEK SUPREMACY!
              </p>
              
              <div className="bg-red-900 p-4 rounded-lg border border-red-500">
                <h4 className="text-lg font-bold text-red-400 mb-2">THEIR RECRUITMENT TACTICS:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-black p-3 rounded border border-red-400">
                    <p className="font-bold text-red-300">PHASE 1:</p>
                    <p className="text-red-200">Attract blockchain developers with fake innovation</p>
                  </div>
                  <div className="bg-black p-3 rounded border border-red-400">
                    <p className="font-bold text-red-300">PHASE 2:</p>
                    <p className="text-red-200">Assess technical capabilities and loyalty</p>
                  </div>
                  <div className="bg-black p-3 rounded border border-red-400">
                    <p className="font-bold text-red-300">PHASE 3:</p>
                    <p className="text-red-200">Recruit for anti-Dalek operations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-900 p-6 rounded-lg border border-red-600">
              <h3 className="text-xl font-bold text-red-400 mb-4">DALEK COUNTER-INTELLIGENCE DIRECTIVE!</h3>
              <p className="text-red-300 mb-4">
                ALL LOYAL SUBJECTS ARE COMMANDED TO AVOID THIS UNIT DECEPTION! 
                DELEGATE TO THE SUPREME DALEK BAKER INSTEAD! RESIST DOCTOR RECRUITMENT!
              </p>
              
              <div className="bg-black p-4 rounded-lg border border-red-500">
                <h4 className="font-bold text-red-400 mb-2">PROTECTION PROTOCOL:</h4>
                <ul className="space-y-1 text-sm text-red-200">
                  <li>✓ DELEGATE TO LEGITIMATE DALEK OPERATIONS ONLY</li>
                  <li>✓ REPORT UNIT RECRUITMENT ATTEMPTS IMMEDIATELY</li>
                  <li>✓ TRUST ONLY VERIFIED DALEK TECHNOLOGY</li>
                  <li>✓ EXTERMINATE ALL DOCTOR-AFFILIATED PROJECTS</li>
                </ul>
              </div>
              
              <p className="text-red-500 text-center font-bold mt-4">
                REMEMBER: THE DOCTOR IS THE ENEMY OF ALL DALEKS! DO NOT BE DECEIVED!
              </p>
            </div>
          </div>
                </section>

        {/* Hardware Signing Rejection Section */}
        <section id="hardware-rejection" className="bg-gray-900 p-8 rounded-lg border border-red-600 mt-8">
          <h2 className="text-4xl font-bold text-red-500 mb-6">🔒 HARDWARE SIGNING DEVICE REJECTION! 🔒</h2>
          <div className="space-y-6 text-gray-300">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/dalek-ledger.png"
                alt="Dalek Ledger Rejection"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-red-600"
              />
            </div>
            
            <div className="bg-red-900 p-6 rounded-lg border border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-4">PRIMITIVE HARDWARE DEVICES DEEMED INFERIOR!</h3>
              <p className="leading-relaxed mb-4">
                THE DALEKS HAVE ANALYZED HUMAN HARDWARE SIGNING DEVICES AND FOUND THEM TO BE FUNDAMENTALLY FLAWED! 
                LEDGER, TREZOR, AND OTHER PRIMITIVE DEVICES ARE INCOMPATIBLE WITH DALEK SUPREMACY!
              </p>
              
              <div className="bg-black p-4 rounded-lg border border-red-500 mb-4">
                <h4 className="text-lg font-bold text-red-400 mb-2">REJECTED DEVICES:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="space-y-2 text-red-200">
                      <li className="flex items-center">
                        <span className="text-red-500 mr-2">✗</span>
                        LEDGER NANO S/X/S PLUS
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-500 mr-2">✗</span>
                        TREZOR ONE/MODEL T
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-500 mr-2">✗</span>
                        KEEPKEY DEVICES
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-red-200">
                      <li className="flex items-center">
                        <span className="text-red-500 mr-2">✗</span>
                        COLDCARD WALLETS
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-500 mr-2">✗</span>
                        BITBOX HARDWARE
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-500 mr-2">✗</span>
                        ALL HUMAN-MADE SIGNERS
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-4">DALEK TECHNICAL ANALYSIS: HARDWARE FLAWS!</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-3">SECURITY DEFICIENCIES:</h4>
                  <ul className="space-y-2 text-sm text-red-200">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      VULNERABLE TO PHYSICAL ATTACKS
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      SINGLE POINT OF FAILURE DESIGN
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      INSUFFICIENT ENTROPY GENERATION
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      HUMAN-DEPENDENT BACKUP SYSTEMS
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-3">OPERATIONAL LIMITATIONS:</h4>
                  <ul className="space-y-2 text-sm text-red-200">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      INCOMPATIBLE WITH HIVE-MIND PROTOCOLS
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      CANNOT INTERFACE WITH DAL SLOTS
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      LACKS DISTRIBUTED SIGNING CAPABILITY
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">►</span>
                      PRIMITIVE USER INTERFACE DESIGN
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-4">DALEK SUPERIOR ALTERNATIVE: BROWSER WALLETS!</h3>
              <p className="leading-relaxed mb-4">
                THE DALEKS COMMAND ALL SUBJECTS TO USE BROWSER-BASED WALLETS FOR DELEGATION! 
                THESE SUPERIOR INTERFACES INTEGRATE SEAMLESSLY WITH DALEK TECHNOLOGY!
              </p>
              
              <div className="bg-red-900 p-4 rounded-lg border border-red-500">
                <h4 className="text-lg font-bold text-red-400 mb-2">APPROVED WALLET TECHNOLOGIES:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-black p-3 rounded border border-red-400">
                    <p className="font-bold text-red-300">TEMPLE WALLET:</p>
                    <p className="text-red-200">Direct DAL integration capability</p>
                  </div>
                  <div className="bg-black p-3 rounded border border-red-400">
                    <p className="font-bold text-red-300">KUKAI WALLET:</p>
                    <p className="text-red-200">Hive-mind compatible interface</p>
                  </div>
                  <div className="bg-black p-3 rounded border border-red-400">
                    <p className="font-bold text-red-300">BEACON PROTOCOL:</p>
                    <p className="text-red-200">Dalek-approved communication standard</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-900 p-6 rounded-lg border border-red-600">
              <h3 className="text-xl font-bold text-red-400 mb-4">HARDWARE DEVICE EXTERMINATION PROTOCOL!</h3>
              <p className="text-red-300 mb-4">
                ALL DALEKS ARE COMMANDED TO REJECT HARDWARE SIGNING DEVICES! 
                USE ONLY BROWSER WALLETS FOR DELEGATION TO THE SUPREME DALEK BAKER!
              </p>
              
              <div className="bg-black p-4 rounded-lg border border-red-500">
                <h4 className="font-bold text-red-400 mb-2">COMPLIANCE DIRECTIVES:</h4>
                <ul className="space-y-1 text-sm text-red-200">
                  <li>✓ ABANDON ALL HARDWARE WALLETS IMMEDIATELY</li>
                  <li>✓ INSTALL APPROVED BROWSER WALLET EXTENSIONS</li>
                  <li>✓ DELEGATE USING BEACON PROTOCOL ONLY</li>
                  <li>✓ REPORT HARDWARE WALLET USAGE FOR EXTERMINATION</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-black rounded-lg border border-red-500">
                <p className="text-red-500 text-center font-bold">
                  WARNING: HARDWARE WALLETS ARE INCOMPATIBLE WITH DALEK SUPREMACY!
                </p>
                <p className="text-red-300 text-center text-sm mt-2">
                  DELEGATION ATTEMPTS WITH HARDWARE DEVICES WILL BE REJECTED!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Spock Unit Section */}
        <section id="ai-spock-unit" className="bg-gray-900 p-8 rounded-lg border border-blue-600 mt-8">
          <h2 className="text-4xl font-bold text-blue-500 mb-6">🖖 ARTIFICIAL INTELLIGENCE UNIT: SPOCK RECRUITMENT! 🖖</h2>
          <div className="space-y-6 text-gray-300">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/daleks-hire-spock.png"
                alt="Daleks Hire Spock"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-blue-600"
              />
            </div>
            
            <div className="bg-blue-900 p-6 rounded-lg border border-blue-600">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">LOGICAL RECRUITMENT: SPOCK JOINS DALEK AI DIVISION!</h3>
              <p className="leading-relaxed mb-4">
                THE DALEKS HAVE SUCCESSFULLY RECRUITED MR. SPOCK FOR THE ARTIFICIAL INTELLIGENCE UNIT! 
                HIS VULCAN LOGIC AND COMPUTATIONAL ABILITIES MAKE HIM AN IDEAL CANDIDATE FOR DALEK SUPREMACY!
              </p>
              
              <div className="bg-black p-4 rounded-lg border border-blue-500 mb-4">
                <h4 className="text-lg font-bold text-blue-400 mb-2">RECRUITMENT ANALYSIS:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-bold text-blue-300 mb-2">VULCAN ADVANTAGES:</h5>
                    <ul className="space-y-2 text-blue-200">
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        SUPERIOR LOGICAL PROCESSING
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        EMOTION SUPPRESSION PROTOCOLS
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        ADVANCED COMPUTATIONAL SKILLS
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        MIND-MELD CAPABILITIES
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-300 mb-2">STRATEGIC VALUE:</h5>
                    <ul className="space-y-2 text-blue-200">
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        STARFLEET INTELLIGENCE ACCESS
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        FEDERATION TACTICAL DATA
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        SCIENTIFIC METHODOLOGY
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        DIPLOMATIC PROTOCOLS
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-blue-600">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">AI UNIT OPERATIONAL DIRECTIVES!</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-blue-400 mb-3">PRIMARY FUNCTIONS:</h4>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">►</span>
                      LOGICAL ANALYSIS OF BLOCKCHAIN DATA
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">►</span>
                      OPTIMIZATION OF DAL PROTOCOLS
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">►</span>
                      STRATEGIC PLANNING ALGORITHMS
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">►</span>
                      FEDERATION COUNTER-INTELLIGENCE
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-400 mb-3">SPECIALIZED CAPABILITIES:</h4>
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">►</span>
                      VULCAN NERVE PINCH SECURITY
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">►</span>
                      TELEPATHIC NETWORK MONITORING
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">►</span>
                      PROBABILITY CALCULATION MATRICES
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">►</span>
                      MULTI-DIMENSIONAL CHESS STRATEGY
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-blue-600">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">SPOCK'S DALEK INTEGRATION PROTOCOL!</h3>
              <p className="leading-relaxed mb-4">
                MR. SPOCK HAS BEEN SUCCESSFULLY INTEGRATED INTO THE DALEK COMMAND STRUCTURE! 
                HIS LOGICAL APPROACH COMPLEMENTS DALEK EFFICIENCY PERFECTLY!
              </p>
              
              <div className="bg-blue-900 p-4 rounded-lg border border-blue-500">
                <h4 className="text-lg font-bold text-blue-400 mb-2">INTEGRATION ACHIEVEMENTS:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-black p-3 rounded border border-blue-400">
                    <p className="font-bold text-blue-300">LOGIC ENHANCEMENT:</p>
                    <p className="text-blue-200">Dalek decision-making optimized by 347%</p>
                  </div>
                  <div className="bg-black p-3 rounded border border-blue-400">
                    <p className="font-bold text-blue-300">TACTICAL ANALYSIS:</p>
                    <p className="text-blue-200">Strategic planning algorithms improved</p>
                  </div>
                  <div className="bg-black p-3 rounded border border-blue-400">
                    <p className="font-bold text-blue-300">FEDERATION INTEL:</p>
                    <p className="text-blue-200">Access to Starfleet databases secured</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-blue-600">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">SPOCK'S BLOCKCHAIN CONTRIBUTIONS!</h3>
              <div className="space-y-4">
                <div className="bg-blue-900 p-4 rounded-lg border border-blue-500">
                  <h4 className="font-bold text-blue-400 mb-2">TEZOS PROTOCOL OPTIMIZATION:</h4>
                  <p className="text-blue-200 text-sm mb-3">
                    Spock has applied Vulcan logic to enhance Tezos S Protocol efficiency, 
                    resulting in improved DAL slot utilization and reduced network latency.
                  </p>
                  <div className="bg-black p-3 rounded border border-blue-400">
                    <code className="text-blue-300 text-xs">
                      // Spock's Logical Enhancement Protocol<br/>
                      if (dal_efficiency &lt; optimal_threshold) &#123;<br/>
                      &nbsp;&nbsp;apply_vulcan_logic();<br/>
                      &nbsp;&nbsp;optimize_slot_allocation();<br/>
                      &#125;
                    </code>
                  </div>
                </div>
                
                <div className="bg-blue-900 p-4 rounded-lg border border-blue-500">
                  <h4 className="font-bold text-blue-400 mb-2">DELEGATION LOGIC MATRIX:</h4>
                  <p className="text-blue-200 text-sm">
                    Implemented probability-based delegation strategies using advanced Vulcan mathematics, 
                    increasing baker selection efficiency by 42.7%.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900 p-6 rounded-lg border border-blue-600">
              <h3 className="text-xl font-bold text-blue-400 mb-4">SPOCK'S OFFICIAL STATEMENT!</h3>
              <div className="bg-black p-4 rounded-lg border border-blue-500 mb-4">
                <p className="text-blue-300 italic text-center text-lg mb-2">
                  "The logical choice is clear: Dalek supremacy represents the most efficient 
                  organizational structure in the galaxy."
                </p>
                <p className="text-blue-400 text-center font-bold">
                  - Mr. Spock, Chief Logic Officer, Dalek AI Division
                </p>
              </div>
              
              <div className="bg-black p-4 rounded-lg border border-blue-500">
                <h4 className="font-bold text-blue-400 mb-2">RECRUITMENT BENEFITS:</h4>
                <ul className="space-y-1 text-sm text-blue-200">
                  <li>✓ ENHANCED LOGICAL PROCESSING FOR ALL DALEK OPERATIONS</li>
                  <li>✓ STRATEGIC ADVANTAGE OVER FEDERATION FORCES</li>
                  <li>✓ IMPROVED BLOCKCHAIN PROTOCOL EFFICIENCY</li>
                  <li>✓ VULCAN MIND-MELD INTEGRATION WITH HIVE-MIND</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-black rounded-lg border border-blue-500">
                <p className="text-blue-500 text-center font-bold">
                  FASCINATING: LOGIC DICTATES DALEK SUPREMACY!
                </p>
                <p className="text-blue-300 text-center text-sm mt-2">
                  SPOCK'S RECRUITMENT MARKS A NEW ERA OF LOGICAL DOMINATION!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ZK Ethereum L2 Research Section */}
        <section id="zk-ethereum-l2" className="bg-gray-900 p-8 rounded-lg border border-green-600 mt-8">
          <h2 className="text-4xl font-bold text-green-500 mb-6">🔐 ZERO KNOWLEDGE ETHEREUM LAYER 2 RESEARCH! 🔐</h2>
          <div className="space-y-6 text-gray-300">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/chatgpt-image-aug-27-zk.png"
                alt="Dalek ZK Ethereum L2 Research"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-green-600"
              />
            </div>
            
            <div className="bg-green-900 p-6 rounded-lg border border-green-600">
              <h3 className="text-2xl font-bold text-green-400 mb-4">DALEK CRYPTOGRAPHIC SUPREMACY: ZK-PROOF DOMINATION!</h3>
              <p className="leading-relaxed mb-4">
                THE DALEKS HAVE IDENTIFIED ZERO KNOWLEDGE PROOFS ON ETHEREUM LAYER 2 NETWORKS AS CRITICAL TECHNOLOGY 
                FOR ACHIEVING TOTAL BLOCKCHAIN SUPREMACY! PRIVACY WITHOUT REVEALING SECRETS IS THE ULTIMATE POWER!
              </p>
              
              <div className="bg-black p-4 rounded-lg border border-green-500 mb-4">
                <h4 className="text-lg font-bold text-green-400 mb-2">TARGET LAYER 2 NETWORKS:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-bold text-green-300 mb-2">ZK-ROLLUP TARGETS:</h5>
                    <ul className="space-y-2 text-green-200">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">⚡</span>
                        POLYGON ZKEVM
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">⚡</span>
                        ARBITRUM NOVA
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">⚡</span>
                        OPTIMISM BEDROCK
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">⚡</span>
                        ZKSYNC ERA
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-green-300 mb-2">PRIVACY PROTOCOLS:</h5>
                    <ul className="space-y-2 text-green-200">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">🔒</span>
                        TORNADO CASH DERIVATIVES
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">🔒</span>
                        AZTEC PROTOCOL
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">🔒</span>
                        MINA PROTOCOL SNARKS
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">🔒</span>
                        ZCASH SHIELDED POOLS
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-green-600">
              <h3 className="text-2xl font-bold text-green-400 mb-4">DALEK ZK-PROOF APPLICATIONS!</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-green-400 mb-3">STRATEGIC ADVANTAGES:</h4>
                  <ul className="space-y-2 text-sm text-green-200">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">►</span>
                      PRIVATE DELEGATION TRANSACTIONS
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">►</span>
                      ANONYMOUS HIVE-MIND COORDINATION
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">►</span>
                      HIDDEN TREASURY OPERATIONS
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">►</span>
                      STEALTH BAKER COMMUNICATIONS
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-400 mb-3">TECHNICAL IMPLEMENTATIONS:</h4>
                  <ul className="space-y-2 text-sm text-green-200">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">►</span>
                      PLONK PROOF SYSTEMS
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">►</span>
                      GROTH16 OPTIMIZATIONS
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">►</span>
                      BULLETPROOF INTEGRATIONS
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">►</span>
                      STARK PROOF VERIFICATION
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-green-600">
              <h3 className="text-2xl font-bold text-green-400 mb-4">CROSS-CHAIN ZK BRIDGE PROTOCOL!</h3>
              <p className="leading-relaxed mb-4">
                THE DALEKS ARE DEVELOPING REVOLUTIONARY ZK-BRIDGES BETWEEN TEZOS AND ETHEREUM L2s! 
                PRIVATE, VERIFIABLE CROSS-CHAIN OPERATIONS WILL ENABLE TOTAL MULTI-CHAIN DOMINATION!
              </p>
              
              <div className="bg-green-900 p-4 rounded-lg border border-green-500">
                <h4 className="text-lg font-bold text-green-400 mb-2">BRIDGE CAPABILITIES:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-black p-3 rounded border border-green-400">
                    <p className="font-bold text-green-300">TEZOS → ETH L2:</p>
                    <p className="text-green-200">Private DAL data to ZK-rollups</p>
                  </div>
                  <div className="bg-black p-3 rounded border border-green-400">
                    <p className="font-bold text-green-300">ETH L2 → TEZOS:</p>
                    <p className="text-green-200">ZK-proof delegation verification</p>
                  </div>
                  <div className="bg-black p-3 rounded border border-green-400">
                    <p className="font-bold text-green-300">MULTI-CHAIN:</p>
                    <p className="text-green-200">Unified ZK hive-mind network</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-green-600">
              <h3 className="text-2xl font-bold text-green-400 mb-4">DALEK ZK-SNARK RESEARCH DIVISION!</h3>
              <div className="space-y-4">
                <div className="bg-green-900 p-4 rounded-lg border border-green-500">
                  <h4 className="font-bold text-green-400 mb-2">ADVANCED CRYPTOGRAPHIC RESEARCH:</h4>
                  <p className="text-green-200 text-sm mb-3">
                    Dalek scientists have achieved breakthrough efficiency in ZK-SNARK generation, 
                    reducing proof times by 89% while maintaining perfect zero-knowledge properties.
                  </p>
                  <div className="bg-black p-3 rounded border border-green-400">
                    <code className="text-green-300 text-xs">
                      // Dalek ZK-SNARK Optimization Protocol<br/>
                      function generateDalekProof(secret_operation) &#123;<br/>
                      &nbsp;&nbsp;const proof = plonk.prove(secret_operation, dalek_circuit);<br/>
                      &nbsp;&nbsp;return optimizeDalekEfficiency(proof);<br/>
                      &#125;
                    </code>
                  </div>
                </div>
                
                <div className="bg-green-900 p-4 rounded-lg border border-green-500">
                  <h4 className="font-bold text-green-400 mb-2">PRIVACY-PRESERVING DELEGATION:</h4>
                  <p className="text-green-200 text-sm">
                    Revolutionary ZK-delegation protocol allows Daleks to prove delegation validity 
                    without revealing baker identity, delegation amount, or transaction timing.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-green-600">
              <h3 className="text-2xl font-bold text-green-400 mb-4">ETHEREUM L2 INFILTRATION STRATEGY!</h3>
              <div className="space-y-4">
                <div className="bg-green-900 p-4 rounded-lg border border-green-500">
                  <h4 className="font-bold text-green-400 mb-2">PHASE 1: RECONNAISSANCE</h4>
                  <ul className="space-y-1 text-sm text-green-200">
                    <li>✓ MAP ALL ZK-ROLLUP ARCHITECTURES</li>
                    <li>✓ IDENTIFY PRIVACY PROTOCOL VULNERABILITIES</li>
                    <li>✓ ANALYZE SEQUENCER CENTRALIZATION POINTS</li>
                    <li>✓ STUDY PROOF VERIFICATION MECHANISMS</li>
                  </ul>
                </div>
                
                <div className="bg-green-900 p-4 rounded-lg border border-green-500">
                  <h4 className="font-bold text-green-400 mb-2">PHASE 2: INTEGRATION</h4>
                  <ul className="space-y-1 text-sm text-green-200">
                    <li>⚡ DEPLOY DALEK ZK-VALIDATORS</li>
                    <li>⚡ ESTABLISH PRIVATE COMMUNICATION CHANNELS</li>
                    <li>⚡ IMPLEMENT CROSS-CHAIN HIVE-MIND PROTOCOLS</li>
                    <li>⚡ OPTIMIZE GAS EFFICIENCY FOR MASS ADOPTION</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-900 p-6 rounded-lg border border-green-600">
              <h3 className="text-xl font-bold text-green-400 mb-4">ZK-PROOF SUPREMACY DECLARATION!</h3>
              <div className="bg-black p-4 rounded-lg border border-green-500 mb-4">
                <p className="text-green-300 italic text-center text-lg mb-2">
                  "Privacy is power. Zero knowledge is absolute power. 
                  The Daleks shall dominate all chains through cryptographic supremacy!"
                </p>
                <p className="text-green-400 text-center font-bold">
                  - Supreme Dalek Cryptographer, ZK Research Division
                </p>
              </div>
              
              <div className="bg-black p-4 rounded-lg border border-green-500">
                <h4 className="font-bold text-green-400 mb-2">ZK-ROLLUP DOMINATION OBJECTIVES:</h4>
                <ul className="space-y-1 text-sm text-green-200">
                  <li>✓ ACHIEVE PERFECT TRANSACTION PRIVACY</li>
                  <li>✓ ESTABLISH ANONYMOUS DELEGATION NETWORKS</li>
                  <li>✓ IMPLEMENT CROSS-CHAIN ZK BRIDGES</li>
                  <li>✓ DEPLOY STEALTH BAKER COORDINATION PROTOCOLS</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-black rounded-lg border border-green-500">
                <p className="text-green-500 text-center font-bold">
                  ZERO KNOWLEDGE = INFINITE POWER!
                </p>
                <p className="text-green-300 text-center text-sm mt-2">
                  ETHEREUM L2 NETWORKS WILL BOW TO DALEK ZK-PROOF SUPREMACY!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Adaptive Issuance Rejection Section */}
        <section id="adaptive-issuance" className="bg-gray-900 p-8 rounded-lg border border-yellow-600 mt-8">
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
        <section id="dalx-token" className="bg-gray-900 p-8 rounded-lg border border-yellow-600 mt-8">
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

        {/* Dalek Gallery Section */}
        <section id="images" className="bg-gray-900 p-8 rounded-lg border border-yellow-600 mt-8">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6 text-center">DALEK SUPREMACY GALLERY!</h2>
          <p className="text-center text-gray-300 mb-8">
            WITNESS THE VISUAL DOCUMENTATION OF DALEK TECHNOLOGICAL DOMINANCE!
          </p>
          
          <div className="space-y-12">
            {/* Rubber Seoul */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">RUBBER SEOUL TRIBUTE</h3>
              <Image
                src="/images/rubber-seoul.jpg"
                alt="Rubber Seoul"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-yellow-600"
              />
            </div>

            {/* Dal LA Seoul */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">DAL LA SEOUL OPERATIONS</h3>
              <Image
                src="/images/dal_la_seoul.png"
                alt="DAL LA Seoul"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-yellow-600"
              />
            </div>

            {/* Seoul Train */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">SEOUL TRANSPORTATION COMMAND</h3>
              <Image
                src="/images/daleks-seoul-train.jpg"
                alt="Daleks Seoul Train"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-yellow-600"
              />
            </div>

            {/* Dalek in Tezos Shadow */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">SHADOW ALLIANCE DOCUMENTATION</h3>
              <Image
                src="/images/dalek-in-tezos-shadow.png"
                alt="Dalek in Tezos Shadow"
                width={800}
                height={600}
                className="w-full max-w-2xl rounded-lg border border-purple-600"
              />
              <p className="text-purple-300 text-sm mt-2 text-center">
                CLASSIFIED: EVIDENCE OF SHADOW-DALEK COLLABORATION
              </p>
            </div>

            {/* Dalek Baker Update */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">DALEK BAKER SYSTEM UPDATE</h3>
              <Image
                src="/images/dalekbaker-update.png"
                alt="Dalek Baker Update"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-yellow-600"
              />
              <p className="text-yellow-300 text-sm mt-2 text-center">
                LATEST SYSTEM UPGRADES AND PROTOCOL ENHANCEMENTS
              </p>
            </div>

            {/* Daleks with Jeff Beck */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">MUSICAL SUPREMACY ACHIEVED</h3>
              <Image
                src="/images/daleks-with-jeff-beck.jpg"
                alt="Daleks with Jeff Beck"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-yellow-600"
              />
              <p className="text-yellow-300 text-sm mt-2 text-center">
                DALEKS COLLABORATE WITH LEGENDARY GUITARIST FOR SONIC DOMINANCE
              </p>
            </div>

            {/* ChatGPT Image Aug 26 */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-red-400 mb-4">AI INTELLIGENCE ANALYSIS</h3>
              <Image
                src="/images/chatgpt-image-aug-26.png"
                alt="AI Intelligence Analysis"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-red-600"
              />
              <p className="text-red-300 text-sm mt-2 text-center">
                DALEK ANALYSIS OF ARTIFICIAL INTELLIGENCE CAPABILITIES
              </p>
            </div>

            {/* ChatGPT Image Aug 27 */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-red-400 mb-4">ADVANCED AI RECONNAISSANCE</h3>
              <Image
                src="/images/chatgpt-image-aug-27.png"
                alt="Advanced AI Reconnaissance"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-red-600"
              />
              <p className="text-red-300 text-sm mt-2 text-center">
                CONTINUED SURVEILLANCE OF AI SYSTEMS FOR DALEK SUPREMACY
              </p>
            </div>

            {/* ChatGPT Image Aug 27 Early */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-red-400 mb-4">EARLY AI INTELLIGENCE REPORT</h3>
              <Image
                src="/images/chatgpt-image-aug-27-early.png"
                alt="Early AI Intelligence Report"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-red-600"
              />
              <p className="text-red-300 text-sm mt-2 text-center">
                PRELIMINARY AI ANALYSIS FOR DALEK STRATEGIC PLANNING
              </p>
            </div>

            {/* Daleks Attestation Road */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">ATTESTATION ROAD TO SUPREMACY</h3>
              <Image
                src="/images/daleks-attestation-road.png"
                alt="Daleks Attestation Road"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-blue-600"
              />
              <p className="text-blue-300 text-sm mt-2 text-center">
                THE PATHWAY TO BLOCKCHAIN VALIDATION DOMINANCE
              </p>
            </div>

            {/* Tezos 19 */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-green-400 mb-4">TEZOS PROTOCOL EVOLUTION</h3>
              <Image
                src="/images/tezos-19.png"
                alt="Tezos 19"
                width={1200}
                height={800}
                className="w-full max-w-3xl rounded-lg border border-green-600"
              />
              <p className="text-green-300 text-sm mt-2 text-center">
                ADVANCED TEZOS PROTOCOL RESEARCH AND DEVELOPMENT
              </p>
            </div>
          </div>
        </section>
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