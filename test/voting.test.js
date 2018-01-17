const Voting = artifacts.require("Ballot");

contract("Voting", accounts => {
  it("should work", () =>
    Voting.deployed()
      .then(instance => instance.chairperson.call())
      .then(addr => {
        assert.equal(addr, accounts[0]);
      }));
});
