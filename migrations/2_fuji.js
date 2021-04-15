const OracleNFT = artifacts.require('FujiConsumer')

module.exports = async (deployer, network, [defaultAccount]) => {

    deployer.deploy(FujiConsumer);

}