![](romantique.png)
# Romantique

A (useless) node module to convert Roman to Decimal numerals. NPM isn't full enough of useless, right? If you ever use this in production, please, let me know.

From 0 to 3999.

## Getting Started
Install the module with:

	npm install romantique

Use the module:

```javascript
var romantique = require('romantique');
```

Converters and Validators for Roman Numerals are available.

### Roman Numerals

To validate:

```javascript
romantique.roman.validate('FDSFEEER');
// => false 
romantique.roman.validate('MMII');
// => true
```

To Decimal:

```javascript
romantique.roman.toDecimal('MMII');
// => 2002 
```

If it's not a Roman Numeral:

```javascript
romantique.roman.toDecimal('FDSFEEER');
// => FDSFEEER is not a valid roman numeral. 
```

### Decimal Numerals

To validate:

*TODO*

To Roman:

*TODO*

If it's not a Decimal Numeral:

*TODO*

## Command Line

You can also have these amazing features in your terminal:

	npm install -g romantique

Then run:

  	romantique --roman MMII
  	// => MMII => 2002
  	
  	romantique -r MMII
  	// => MMII => 2002
  	
  	romantique --roman FDSFEEER
  	// FDSFEEER is not a valid roman numeral.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. 

To run test:

`npm test`


Lint and test your code using [Grunt](http://gruntjs.com/). For that, watch the files to lint it automagically with:

`grunt watch`

(It's actually complaining about missing semicolon and comma-first.)

## License
Copyright (c) 2013 Jú Gonçalves  
Licensed under the MIT license.
