require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/vBhFNCQCBQEBjTIGd5eRRYErnAlYswCO',
      accounts: ['4ceb13b28203c0b6947c10e92f77c772be07479b57c7b9f5d90f1510b851bf5b'],
    },
  },
};