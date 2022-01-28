require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remind arrow guess entry blue gate'; 
let testAccounts = [
"0x5c2a1e6b5e87aebbae4a44bf62874c1a76fa3471850a0782b39751d4e81d07fd",
"0x7ce495c41cf6ad3300b2f0c76885c5292f0367ec4e212a7e6e76dffc484ce639",
"0x7f26142663f7464a2cb62d288b477b418b8cd7745796da511d626536bcf8d4f7",
"0x951074520f014242e7a813eac11cc47324985947de219671701dca2f2c8dfb95",
"0x3eab8d011bd5ef1f81d3c16932a4d3c40c1eba148518905047c0c9e7210edaea",
"0x982073001237ad6594b1e933ecf8dfb5adc5cb2f581e4ba5ffc024cc3ba5b367",
"0xa4a11300bcd0ab2074889d68ac68591fc63c21fa94b645f47ad51c20e39be1a1",
"0x629fb59796c81933d1c13470157bcb6470fe8596f0ce844ca6f16a0365220e4e",
"0x885f49ed0357181aed9aa318e27db83a472e8e8837e9744f8a04235109b106ef",
"0x018bd434a8fb951ad4d0cc4c61f1e6d8f9684cf97a76ae1deb0547321f3c5013"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

