'use strict'

jest.autoMockOff()

const defineTest = require('jscodeshift/dist/testUtils').defineTest

const options = {
  config: `${__dirname}/../config.example`
}

defineTest(__dirname, 'angular-injected-dep-to-es6-import', options, 'angular-injected-dep-to-es6-import')
defineTest(__dirname, 'angular-injected-dep-to-es6-import', options, 'angular-injected-dep-to-es6-import-no-use-strict')
defineTest(__dirname, 'angular-injected-dep-to-es6-import', options, 'angular-injected-dep-to-es6-import-with-iife')
