JSCodemod Collection
==========

[![CircleCI](https://circleci.com/gh/baopham/jscodemod-collection.svg?style=svg)](https://circleci.com/gh/baopham/jscodemod-collection)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) 

A collection of JSCodemods


Usage:
------

### Convert Angular injected dependencies to ES6 import

> Note: you will need to pass in the path to a config script for generating the import statements.
> See [config.example.js](./transformers/config.example.js)

```bash
cd transformers
jscodeshift -t ./angular-injected-dep-to-es6-import.js /path/to/your-angular-file.js --config='./config.example'
```

Example:  

* Input:

```js
'use strict';

angular.module('angularApp')
  .factory('helloWorld', helloWorld);

function helloWorld($http, $q, helloWorldConstant) {

}
```

* Output:

```js
'use strict';

import { $http, $q } from '../../angularDeps';
import helloWorldConstant from '../../helloWorld.constant';

angular.module('angularApp')
  .factory('helloWorld', helloWorld);

function helloWorld() {

}
```


### A helper to collect all the Angular services, factories, constants etc. including their file paths

```bash
cd /path/to/angular-project
jscodeshift -s -t /path/to/jscodemod-collection/transformers/angular-collect.js --ignore-config=.gitignore ./client
```

Will output

```JSON
"helloWorldConstant": "path/to/helloWorld.constant.js",
"helloWorldService": "path/to/helloWorld.service.js",
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
