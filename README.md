# ICO DApp Project

## Overview

This project is a decentralized application (DApp) for conducting Initial Coin Offerings (ICOs) on the Ethereum blockchain. It allows users to connect their wallets, participate in the ICO by purchasing tokens, and view their token balances.
## Features

- Connect to MetaMask wallet
- Participate in the ICO by purchasing tokens
- View user token balance
- Handle network changes and account changes
- Responsive and user-friendly interface

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Ethers.js**: Library for interacting with the Ethereum blockchain.
- **Solidity**: Programming language for writing smart contracts.
- **MetaMask**: Browser extension for managing Ethereum wallets.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Hardhat**: For deployment and Verification.
- **RemixIDE**: For development and testing.
## Smart Contracts

### ICO Contract Overview

The ICO contract manages the entire process of the Initial Coin Offering, allowing users to purchase tokens during a specified time frame. It includes features like pausing the ICO, withdrawing funds, and checking user balances.

### Key Functions:

- **send()**: Allows users to send Ether to purchase tokens.
- **withdraw()**: Enables the owner to withdraw collected funds after the ICO ends.
- **getTokenOfUser()**: Returns the token balance of a user.
- **pauseICO()**: Pauses the ICO, preventing further purchases until unpaused.
- **unpauseICO()**: Resumes the ICO after it has been paused.
- **burnTokens(uint amount)**: Allows the owner to burn a specified amount of tokens.

- ## Smart Contract Addresses

- **Token Contract Address**: `0xA3f1Eb3B3112f9d8ab20274BD90ed4edc032dbF0`
- **ICO Contract Address**: `0xf1A8Af117A44A248Ea194F3FaB61A16d14Ef9f93`
- ## Deployment

### Deployed Contract on Polygon Amoy Testnet

The ICO contract has been successfully deployed on the Polygon Amoy testnet. Below are the details for the deployment process:

1. **Network Details**:
   - **Network Name**: Polygon Amoy Testnet
   - **RPC URL**: `https://rpc-amoy.polygon.technology/`
   - **Chain ID**: `80002`
   - **Block Explorer URL**: [PolygonScan Amoy](https://amoy.polygonscan.com/)

2. **Setup Environment**:
   - Create a `.env` file in the root directory of your Hardhat project and add your private key and Polygonscan API key:
     ```
     PRIVATE_KEY=your_private_key
     POLYGONSCAN_API_KEY=your_polygonscan_api_key
     ```

3. **Hardhat Configuration**:
   - Update your `hardhat.config.js` file to include the Polygon Amoy testnet configuration.

4. **Compile Smart Contracts**:
   ```bash
   npx hardhat compile
