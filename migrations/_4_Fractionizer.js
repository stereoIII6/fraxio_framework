const Fractionizer = artifacts.require('Fractionizer');

module.exports = async (deployer, network, [defaultAccount]) => {

    deployer.deploy(Fractionizer);

}