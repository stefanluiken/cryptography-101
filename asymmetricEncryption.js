// Create public and private keys, through RSA protocol

const { generateKeyPairSync } = require('crypto');
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: 'spki', // recommended to be 'spki' by the Node.js docs
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
    format: 'pem',
  },
});

console.log('Example public key:');
console.log(publicKey);

console.log('Example private key:');
console.log(privateKey);

// Encrypt and decrypt the message

const {  publicEncrypt, privateDecrypt } = require('crypto');
const message = 'This has to be safe!'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
  );

console.log('Encrypted data:')
console.log(encryptedData.toString('hex'))


const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log('Decrypted data:')
console.log(decryptedData.toString('utf-8'));

