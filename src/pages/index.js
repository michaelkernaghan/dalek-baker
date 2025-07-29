// src/pages/index.js
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

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
          
          {/* Section Index */}
          <div className="mt-8 bg-black p-6 rounded-lg border border-yellow-600">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">NAVIGATE THE DALEK DOMINION!</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
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