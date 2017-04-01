JSCodemod Collection
==========
A collection of JSCodemods


Usage:
------

* Convert Angular injected dependencies to ES6 import

```bash
cd scripts
jscodeshift -t ./angular-injected-dep-to-es6-import.js ../tests/angular-factory.js --config='./config.example'
```


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
