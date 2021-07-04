const MLQ = artifacts.require("MLQ");

module.exports = async (deployer, network, [defaultAccount]) => {
  deployer.deploy(MLQ);
};
