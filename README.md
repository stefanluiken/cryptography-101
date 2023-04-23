# Cryptography 101

- Hashing: With hashing we process an input of variable length, and use a hashing function to output a fixed-length value. 
  - The same input, will always create the same output. The hashing function needs to be fast, and the result unique.
  - Its hard to reverse engineer the input, hashing is for instance used for creating passwords (we do not want to store the real password!).
  - An example of a hash algorithm is 'sha256', which stands for secure hashing algorithm 2. This returns a hash value that is a digest with 256-bits. 
  - Crytography is a dynamic domain, and algorithms do not stay "safe" forever. MD5 can be seen as deprecated, since computing power has become so strong, it is relatively easy to reverse engineer the input from a hashed value, if it used the MD5 hashing algorithm.
  - The process of hashing is normally one-way. This is especially important for hashes designed for passwords or cryptology, which differ from hashes designed for hashMaps. Also, with an unbounded input length, there is an infinite amount of values which result in the same hash. One method that can be used is to hash a bunch of values (e.g. brute-force from aaaaaaaa-zzzzzzz) and see which value has the same hash. If we have found this, we have found "the value" (the time is not cheap). 

- Salt: A random value added to the input before it is being hashed. 
- HMAC: A hash-based message authentication code. It is a hash, which also requires a password.
- Ecnryption: We take a message, encrypt it by changing the bytes to make it unreadable (cipher text), and then provide a key/password to someone else to decrypt it.
- Symmetric encryption: Sharing a secret with someone (shared password), and allowing the other person to read the original message. Both the sender and the receiver need this secret.
- Asymmetric encryption: Because it can be hard for the sender and receiver to access the same secret key, we can use a public key cryptosystem (RSA is the most common) which generates a public and a private key. 
  - Instead of one key, it uses two keys that are mathematically linked: a public key and a private key. Anyone with the public key, can encrypt the data. Only with the private key, we can decrypt the data.
- Signing: With signing, we can make sure that the data we received if legitimate. Signing is the process of creating a digital signature of a message. A signature is a hash of the original message which is then encrypted with the sender’s private key. The signature can be verified by the recipient using the public key of the sender. This can guarantee the original message is authentic and unmodified.
