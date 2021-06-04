const PYE = artifacts.require('PYE');
module.exports = async (deployer, network, [defaultAccount]) => {

    deployer.deploy(PYE, "PYE Token", "PYE", "0x95b58a6bff3d14b7db2f5cb5f0ad413dc2940658");

}
