const EOL = require('os').EOL

const DEFAULT_PATH_FOR_ANGULAR_DEPS = '../../angularDeps'

const ANGULAR_DEPS = [
  '$http',
  '$q',
  '$window'
]

const config = {
  importStatmentGenerator
}

function importStatmentGenerator (names) {
  const angularDeps = names.filter(name => ANGULAR_DEPS.includes(name))
  const nonAngularDeps = names.filter(name => !ANGULAR_DEPS.includes(name))

  const angularDepsImport = `import { ${angularDeps.join(', ')} } from '${DEFAULT_PATH_FOR_ANGULAR_DEPS}';`
  const nonAngularDepsImports = nonAngularDeps.map(dep => `import ${dep} from '../../../can-use-regex-here';`)

  return [
    angularDepsImport,
    ...nonAngularDepsImports
  ].join(EOL)
}

module.exports = config
