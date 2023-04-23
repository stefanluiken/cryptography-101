const { createHmac } = require('crypto');

const key = 'super-secret';
const message = "hello world!";

const hmac = createHmac('sha256', key).update(message).digest('hex');
console.log(hmac);