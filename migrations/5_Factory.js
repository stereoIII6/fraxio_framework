const Factory = artifacts.require('Factory');

module.exports = async (deployer, network, [defaultAccount]) => {

    deployer.deploy(Factory , "1234");

}