require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift rescue night hope harvest clinic outer siege'; 
let testAccounts = [
"0x6a085598b73a182cbda72679130112b68ecb6e878fcae837c25dc5c4fbee07f3",
"0x428f9b934c6b6502a34839d9760632bbde9124ebddb3ccdf65581d05812c7a37",
"0x2ba27203dae20a689f09370db72344cde61928bc76f3d36538c30800eeb9ffbb",
"0x30dd8c7634e17e68e8ac4161223ec093afb9c89e10f1c85806d9b6ff46c0990d",
"0x8c1bcca366481604d24843fee94ff8475cddf44cc4763546399ddc273526f679",
"0xffc32848bf0d9cfebe373b5ab8c8fea6ed845e889e4107f537d4ddfc91cf3ec1",
"0x93f8cd1d8b4dec8d76e8b990ad83d104d6a91ec2a10b3411f909dd7678b81b0a",
"0x21c1fc0acd741acfb487f38d8c0f83f7c1bce4904c1381805a55cce5904f536f",
"0x7ae030214336d4adbf947b937de0e404461874d47b144fcb3a45007885c1c5fc",
"0x0b75a97e08fc65e8c9696b811d2c5eb0fac57454c7a8719b5efca6c430df2c36"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


