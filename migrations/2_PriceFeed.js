const PriceFeed = artifacts.require("PriceFeed");

module.exports = async (deployer, network, [defaultAccount]) => {
  deployer.deploy(PriceFeed);
};
