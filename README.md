JSCodemod Collection
==========

[![CircleCI](https://circleci.com/gh/baopham/jscodemod-collection.svg?style=svg)](https://circleci.com/gh/baopham/jscodemod-collection)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) 

A collection of JSCodemods


Usage:
------

* Convert Angular injected dependencies to ES6 import

> Tips: it will work best if you have removed IIFE or if you still want to keep IIFE, keep 'use strict' outside the IIFE

```bash
cd transformers
jscodeshift -t ./angular-injected-dep-to-es6-import.js /path/to/your-angular-file.js --config='./config.example'
```

* A helper to collect all the Angular service, factory, constant etc. including their file paths.

```
cd /path/to/angular-project
jscodeshift -s -t /path/to/jscodemod-collection/transformers/angular-collect.js --ignore-config=.gitignore ./client
```

You can then copy the output to a JSON file that can be used for later.


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
