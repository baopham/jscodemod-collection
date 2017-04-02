'use strict';

import { $http, $q } from '../../angularDeps';
import helloWorldConstant from '../../helloWorld.constant';

(function () {
  angular.module('angularApp')
    .factory('helloWorld', helloWorld);

  function helloWorld() {

  }
})();
