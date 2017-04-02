'use strict';

import { $http, $q } from '../../angularDeps';
import helloWorldConstant from '../../helloWorld.constant.js';

(function () {
  angular.module('angularApp')
    .factory('helloWorld', helloWorld);

  function helloWorld() {

  }
})();
