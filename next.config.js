require("dotenv").config();

module.exports = {
  env: {
    REACT_APP_MNEMONIC: process.env.REACT_APP_MNEMONIC,
    REACT_APP_INFURA_API: process.env.REACT_APP_INFURA_API,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS
  }
};

const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig
