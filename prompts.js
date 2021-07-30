module.exports = [
  {
    name: `isAddTorus`,
    type: "confirm",
    message: "Add Torus web3 provider?",
    default: false,
    group: "Torus Wallet",
    description:
      "Embeds the Torus Wallet directly in your application via torus-embed. Exposes a Web3 Provider.",
    link: "https://github.com/torusresearch/torus-embed#readme",
  },
  {
    name: `isAddAuthereum`,
    type: "confirm",
    message: "Add  Authereum web3 provider",
    default: false,
    group: "Authereum",
    description:
      "with the Authereum web3 provider",
    link: "https://docs.authereum.com/integration",
  },
  {
    name: `isAddBitski`,
    type: "confirm",
    message: "Add Bitski web3 provider?",
    default: false,
    group: "Bitski",
    description:
      "with the Bitski web3 provider",
    link: "https://docs.bitski.com/",
  },
  {
    name: `isAddFortmatic`,
    type: "confirm",
    message: "Add Fortmatic web3 provider?",
    default: false,
    group: "Fortmatic",
    description:
      "with the Fortmatic web3 provider",
    link: "https://docs.fortmatic.com/",
  },
  {
    name: `addExample`,
    type: "confirm",
    message: "Add example connectWallte?",
    default: false,
  },
];
