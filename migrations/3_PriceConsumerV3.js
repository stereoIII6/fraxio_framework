const PriceConsumerV3 = artifacts.require("PriceConsumerV3");

module.exports = async (deployer, network, [defaultAccount]) => {
  deployer.deploy(PriceConsumerV3);
};
