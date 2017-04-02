JSCodemod Collection
==========

[![CircleCI](https://circleci.com/gh/baopham/jscodemod-collection.svg?style=svg)](https://circleci.com/gh/baopham/jscodemod-collection)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) 

A collection of JSCodemods


Usage:
------

* Convert Angular injected dependencies to ES6 import

```bash
cd transformers
jscodeshift -t ./angular-injected-dep-to-es6-import.js /path/to/your-angular-file.js --config='./config.example'
```

* A helper to collect all the Angular services, factories, constants etc. including their file paths

```
cd /path/to/angular-project
jscodeshift -s -t /path/to/jscodemod-collection/transformers/angular-collect.js --ignore-config=.gitignore ./client
```

You can then copy the output to a JSON file that can be used for later. See [config.example.js](./transformers/config.example.js)


Requirements:
-------------
Node ^6

Install:
--------

```bash
git clone git@github.com:baopham/jscodemod-collection.git
yarn install
yarn install jscodeshift -g
```

License:
--------
MIT

Author:
-------
Bao Pham
