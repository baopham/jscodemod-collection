'use strict'

const EOL = require('os').EOL

module.exports = transformer

function transformer (file, api, options) {
  const j = api.jscodeshift
  const root = j(file.source)
  const config = require(options.config)

  const functionName = findFunctionName(j, root)
  const paramNames = findAndRemoveFunctionParams(j, root, functionName)

  insertImportStatements(j, root, config.importStatementGenerator(paramNames, file.path))

  return root.toSource()
}

function insertImportStatements (j, root, importStatements) {
  const useStrictPath = root
    .find(j.ExpressionStatement, {
      expression: {
        value: 'use strict'
      }
    })

  if (useStrictPath.size()) {
    j(useStrictPath.get()).insertAfter(importStatements)
    return
  }

  const firstNode = root.find(j.Program).get('body', 0)
  j(firstNode).insertBefore(`${EOL}${importStatements}`)
}

function findAndRemoveFunctionParams (j, root, functionName) {
  const path = root
    .find(j.FunctionDeclaration, {
      id: {
        name: functionName
      }
    })

  const { node } = path.get()
  const paramNames = node.params.map(param => param.name)
  node.params = []

  return paramNames
}

function findFunctionName (j, root) {
  const path = root
    .find(j.CallExpression, {
      callee: {
        object: {
          callee: {
            object: {
              name: 'angular'
            }
          }
        }
      }
    })

  const [, fn] = path.get().node.arguments
  return fn.name
}
