# mailgun-rest

--

[Mailgun](https://mailgun.com/) Nodejs library.
It wraps the HTTP api library described [here](https://mailgun.com/console/#!/api/).

Based on the NodeJS HTTP API wrapper of gitlab described [here](https://github.com/node-gitlab/node-gitlab)

Maintained by [Jens Verbeken](https://github.com/jensvrai).


## Install

```bash
# Install from npm
npm install mailgun
```

## Usage

### Coffee-Script
```coffee
# Connection
mailgun = (require 'mailgun')
  auth: ["Xapi","key-b52b1e2479a5d90b58f9802706c8eb01"]

domain = 'your_domain'

data =
  "event": "delivered"

# Check your stats
mailgun.stats.retrieveAll domain, data, (err, result) ->
  console.log result
```

### Javascript
```javascript
// Connection
var mailgun = require('mailgun')({
  auth: ["api", "your_key"]
});

var domain = 'your_domain'

var data = {
  "event": "delivered"
};

// check your stats
mailgun.stats.retrieve(domain, data, function(err, result) {
  console.log(result);
});

```

## Develop

Install coffee-script globally: 'npm install -g coffee-script'.
Edit the Coffee-Script files in `src`, then build them using `cake build`.
Use `cake watch` to build files continuously while developing.

## Contributors

- [Pieter Soudan](https://github.com/Sewdn)

## License

MIT


## Changelog
