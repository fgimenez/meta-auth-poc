# MetaAuth Proof of Concept

This PoC runs a local server and authenticates to it using MetaMask from an html
page (the equivalent of an actaul Dapp). You need to have MetaMask unlocaked in
order to try it.

First, clone the repo, install the dependencies and start the server:
```
$ git clone https://github.com/fgimenez/meta-auth-poc.git

$ cd meta-auth-poc

$ npm i

$ node index.js
```
Then, browse to `http:localhost:3001` and click `Get Challenge`. A MetaMask
Notification window will show up with the challenge details, click `SIGN` on it.

After that, the signature is shown in the page, click `Verify Signature` to send
the challenge and signature to the server to verify it, you should see an
`Authentication Success` message on the page once the verification is done.
