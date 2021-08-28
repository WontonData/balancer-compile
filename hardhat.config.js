/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require("@nomiclabs/hardhat-solhint");
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 7500,
          },
        },
      },
    ],
    overrides: {
      "contracts/balancer-core-v2/vault/Vault.sol": {
        version: "0.7.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 400,
          },
        },
      },
      "contracts/balancer-core-v2/pools/weighted/WeightedPoolFactory.sol": {
        version: "0.7.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      },
    },
  }
};
