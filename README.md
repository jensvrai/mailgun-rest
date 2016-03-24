# node-maigun

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
  key:   'your_key'

domain = 'your_domain'

# Check a VAT
mailgun.stats.retrieveall (err, result) ->
  console.log result
```

### Javascript
```javascript
// Connection
var mailgun = require('mailgun')({
  key:   'your_key'
});

var domain = 'your_domain'

// check a vat
mailgun.vat.number_check(function(err, result) {
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
