'use strict';

jest.autoMockOff();

const defineTest = require('jscodeshift/dist/testUtils').defineTest;
defineTest(__dirname, 'angular-injected-dep-to-es6-import', { config: `${__dirname}/../config.example` });
