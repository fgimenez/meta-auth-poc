const express = require('express')
const MetaAuth = require('meta-auth')

const app = express()
const metaAuth = new MetaAuth({
  banner: 'Auth PoC'
})

app.use('/', express.static('.'))

app.get('/auth/:MetaAddress', metaAuth, (req, res) => {
  // Request a message from the server
  if (req.metaAuth && req.metaAuth.challenge) {
    res.send(req.metaAuth.challenge)
    console.log(`Challenge sent`)
  }
});

app.get('/auth/:MetaMessage/:MetaSignature', metaAuth, (req, res) => {
  if (req.metaAuth && req.metaAuth.recovered) {
    // Signature matches the cache address/challenge
    // Authentication is valid.
    res.send(req.metaAuth.recovered)
    console.log(`Signature matched`)
  } else {
    // Sig did not match, invalid authentication.
    res.status(400).send()
    console.log(`Signature didn't match`)
  };
});

app.listen(3001, () => {
  console.log('Listening on port 3001')
})
