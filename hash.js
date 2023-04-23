const {createHash} = require('crypto');

// create a String hash

function hash(input) {
    return createHash('sha256').update(input).digest('base64');
}

let password = 'my-secret!';
const hashedValue = hash(password);

console.log(hashedValue);