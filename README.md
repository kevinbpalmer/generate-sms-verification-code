# generate-sms-verification-code

## Installation

To install generate-sms-verification-code, use [npm](http://github.com/npm/npm):

```
npm install generate-sms-verification-code
```

## Usage

```javascript
var phoneToken = require('generate-sms-verification-code')

var generatedToken = phoneNumberToken(8, {type: 'number'})
```

## API

`phoneToken(length, options)`
  - `options` - the length of the random string. [REQUIRED]
    - `type`
      - `number`
      - `string`

## Tests

```
npm install
npm test
```

## LICENSE

generate-sms-verification-code is licensed under the MIT license.
