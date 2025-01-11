import React from 'react'

const Feature = () => {
    const features = [
        "Private Key Management",
        "Multi-Layered Security",
        "Backup and Recovery",
        "Transaction Verification",
        "Integration with Blockchain Technology",
      ];
    
      const types = [
        {
          name: "Hot Wallets",
          description: "Connected to the internet and convenient for frequent transactions.",
          examples: "Examples: Trust Wallet, MetaMask, Coinbase Wallet.",
          security: "Features: Encryption, 2FA, biometric login.",
        },
        {
          name: "Cold Wallets",
          description: "Offline wallets used for long-term storage and high security.",
          examples: "Examples: Ledger, Trezor, paper wallets.",
          security: "Features: Offline isolation, PIN protection.",
        },
      ];
    
      const renderFeatures = () => {
        return features.map((feature, index) => (
          <li key={index} className="feature-item">
            {feature}
          </li>
        ));
      };
    
      const renderTypes = () => {
        return types.map((type, index) => (
          <div key={index} className="wallet-type">
            <h3>{type.name}</h3>
            <p>{type.description}</p>
            <p><strong>{type.examples}</strong></p>
            <p><em>{type.security}</em></p>
          </div>
        ));
      };
    
      return (
        <div className="secure-wallet">
          <h1>Secure Wallet</h1>
          <section className="intro">
            <p>
              A <strong>Secure Wallet</strong> is a digital tool for storing, managing, and transacting cryptocurrencies safely. Here's how it works and why it's essential in the crypto space.
            </p>
          </section>
    
          <section className="features">
            <h2>Key Features</h2>
            <ul>{renderFeatures()}</ul>
          </section>
    
          <section className="types">
            <h2>Types of Secure Wallets</h2>
            {renderTypes()}
          </section>
    
          <section className="how-it-works">
            <h2>How It Works</h2>
            <p>
              <strong>Key Generation:</strong> A pair of cryptographic keys (public and private) is generated when you create a wallet. The public key is your wallet address, while the private key provides access to your funds.
            </p>
            <p>
              <strong>Fund Storage:</strong> Cryptocurrencies are recorded on the blockchain. Your wallet provides access to your funds securely.
            </p>
            <p>
              <strong>Transactions:</strong> Transactions are signed using your private key, ensuring they are secure and verified on the blockchain.
            </p>
          </section>
    
          <section className="security-measures">
            <h2>Advanced Security Measures</h2>
            <ul>
              <li>Hardware Encryption: Secure chips for high-level encryption.</li>
              <li>Air-Gapped Devices: Offline wallets for ultimate security.</li>
              <li>Anti-Phishing Tools: Verify URLs and wallet addresses.</li>
              <li>Biometric Authentication: Fingerprint or facial recognition.</li>
            </ul>
          </section>
    
          <section className="benefits">
            <h2>Benefits</h2>
            <ul>
              <li><strong>Control:</strong> Full ownership of your funds.</li>
              <li><strong>Safety:</strong> Reduced risk of hacks and scams.</li>
              <li><strong>Convenience:</strong> Easy access with backups.</li>
              <li><strong>Privacy:</strong> Anonymous transactions and data protection.</li>
            </ul>
          </section>
        </div>
      );
    };

export default Feature
