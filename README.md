
[![Build Status](https://travis-ci.org/deanilvincent/age-by-birthdate.svg?branch=master)](https://travis-ci.org/deanilvincent/age-by-birthdate)
# Overview
A simple NPM package for getting the age by selected birthdate.

# Installation

`npm i age-by-birthdate --save`

# Setup & Basic Usage

```
const getAge = require('age-by-birthdate')

console.log(getAge('8/17/1981'))

// 38
```

# Formats
| Available formats | Sample |
|--|--|
| ISO Date Format | `getAge('1981-08-17')` |
| Short Date Format | `getAge('08/17/1981')` |
| Long Date Format | `getAge('Aug 17 1981')` |
| Full Date Format | `getAge('August 17, 1981')` |

### Contribute

Feel free to clone or fork this project:  `https://github.com/deanilvincent/age-by-birthdate.git`

Contributions & pull requests are welcome!

I'll be glad if you give this project a ★ on [Github](https://github.com/deanilvincent/age-by-birthdate) :))

### License

This project is licensed under the MIT License - see the  [LICENSE.md](https://github.com/deanilvincent/age-by-birthdate/blob/master/LICENSE) file for details.