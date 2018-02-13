const Ballot = artifacts.require("Ballot");

module.exports = deployer => {
  deployer.deploy(Ballot, ["foo", "bar", "baz"]);
};
