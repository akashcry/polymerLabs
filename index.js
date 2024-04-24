const { ethers } = require("ethers");
const {rawData} = require('./x.js');
async function interactWithContract(
  seedPhrase,
  contractAddress,
  functionSignature,
  rawData
) {
  const rpcUrl = "https://optimism-sepolia.blockpi.network/v1/rpc/public";
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const wallet = ethers.Wallet.fromMnemonic(seedPhrase);
  const connectedWallet = wallet.connect(provider);
  const tx = {
    to: contractAddress,
    data:"0x"+rawData.substring(2), // Remove the '0x' prefix from rawData
    gasLimit: ethers.utils.hexlify(156357),
  };

  const transaction = await connectedWallet.sendTransaction({
    ...tx,
  });

  console.log("Transaction Result:", transaction.hash);
}

// Example values
const seedPhrase =
  "seed phrase here";
const contractAddress = "0x5c48ab8DFD7abd7D14027FF65f01887F78EfFE0F";
const functionSignature = "0x24b55000";


// Call the function
interactWithContract(seedPhrase, contractAddress, functionSignature, rawData);
