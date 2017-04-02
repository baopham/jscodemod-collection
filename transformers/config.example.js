'use strict'

/**
 * A config example that you can pass to the transformers
 */

const EOL = require('os').EOL
const path = require('path')

const DEFAULT_PATH_FOR_ANGULAR_DEPS = '../../angularDeps'

const ANGULAR_DEPS = [
  '$http',
  '$q',
  '$window'
]

// You can get this map using the `angular-collect.js` transformer
const DEPENDENCY_MAPPER = {
  'helloWorldConstant': `${__dirname}/helloWorld.constant.js`
}

const config = {
  importStatementGenerator
}

function importStatementGenerator (names, filePath) {
  const angularDeps = names.filter(name => ANGULAR_DEPS.includes(name))
  const nonAngularDeps = names.filter(name => !ANGULAR_DEPS.includes(name))

  const angularDepsImport = `import { ${angularDeps.join(', ')} } from '${DEFAULT_PATH_FOR_ANGULAR_DEPS}';`
  const nonAngularDepsImports = nonAngularDeps.map(dep => getImportStatementForNonAngular(filePath, dep))

  return [
    angularDepsImport,
    ...nonAngularDepsImports
  ].join(EOL)
}

function getImportStatementForNonAngular (filePath, dependency) {
  const dependencyPath = DEPENDENCY_MAPPER[dependency]
  return `import ${dependency} from '${path.relative(filePath, dependencyPath)}';`
}

module.exports = config
