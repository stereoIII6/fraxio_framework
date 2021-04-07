const OracleNFT = artifacts.require('OracleNFT')

module.exports = async (deployer, network, [defaultAccount]) => {

    deployer.deploy(OracleNFT);

}