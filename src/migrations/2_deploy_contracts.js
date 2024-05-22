// migrations/2_deploy_contracts.js
const AddNumbers = artifacts.require("AddNumbers");

module.exports = function(deployer) {
    deployer.deploy(AddNumbers);
};
