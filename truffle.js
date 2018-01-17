module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ci: {
      host: "ganache",
      port: 8545,
      network_id: "1337"
    }
  }
};
