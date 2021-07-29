module.exports = (api, options = {}, rootOptions = {}) => {
  api.render("./template",{...options});

  if(options.addExample){
    api.render((files, render) => {
        delete files['src/App.vue']
        delete files['src/components/ConnectWallte.vue']
      })
  }
  
  const dependencies = {}
    options.isAddTorus &&(dependencies['@toruslabs/torus-embed'] = "^1.10.15")
    options.isAddAuthereum &&(dependencies['authereum'] = "^0.1.14")
    options.isAddBitski &&(dependencies['bitski'] = "^0.11.0-beta.4")
    options.isAddFortmatic &&(dependencies['fortmatic'] = "^2.2.1")

  api.extendPackage({
    dependencies: {
      ...dependencies,
      "@walletconnect/web3-provider": "^1.4.1",
      web3: "^1.3.6",
      web3modal: "^1.9.3",
    },
  });
};
