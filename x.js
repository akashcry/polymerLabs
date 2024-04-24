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
    data: "0x" + rawData.substring(2), // Remove the '0x' prefix from rawData
    gasLimit: ethers.utils.hexlify(156357),
  };

  const transaction = await connectedWallet.sendTransaction({
    ...tx,
  });

  console.log("Transaction Result:", transaction.hash);
}

const rawData =
  "0x24b5500000000000000000000000000042652e55a036d716cdd760543936e5a6c74523b16368616e6e656c2d3430323732000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008ca0";
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
    data: "0x" + rawData.substring(2), // Remove the '0x' prefix from rawData
    gasLimit: ethers.utils.hexlify(156357),
  };

  const transaction = await connectedWallet.sendTransaction({
    ...tx,
  });

  console.log("Transaction Result:", transaction.hash);
}

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
    data: "0x" + rawData.substring(2), // Remove the '0x' prefix from rawData
    gasLimit: ethers.utils.hexlify(156357),
  };

  const transaction = await connectedWallet.sendTransaction({
    ...tx,
  });

  console.log("Transaction Result:", transaction.hash);
}

module.exports = {
  rawData,
};
