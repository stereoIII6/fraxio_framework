const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require("web3");
require('dotenv').config();
const mnemonic = process.env.MNEMONIC

module.exports = {
  networks: {
    cldev: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(mnemonic, process.env.KOVAN_URL)
      },
      network_id: '42',
      skipDryRun: true
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(mnemonic, process.env.RINKEBY_URL)
      },
      network_id: '4',
      skipDryRun: true
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(mnemonic, process.env.ROPSTEN_URL)
      },
      network_id: '3',
      skipDryRun: true
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(mnemonic, process.env.GOERLI_URL)
      },
      network_id: '5',
      skipDryRun: true
    },
    xdai: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          process.env.XDAI_URL)
      },
      network_id: 43113,
      gas: 500000,
      gasPrice: 1000000000
    },
    avax: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          process.env.AVAX_URL)
      },
      network_id: 100,
      gas: 500000,
      gasPrice: 1000000000
    },
    polygon: {
      provider: () => new HDWalletProvider(mnemonic, process.env.POLYGON_URL),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  api_keys: process.env.API_KEYS,
  plugins: ["truffle-plugin-verify"],
  compilers: {
    solc: {
      version: '0.6.6',
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/'
}
