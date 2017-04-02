'use strict'

module.exports = transformer

function transformer (file, api, options) {
  const j = api.jscodeshift
  const root = j(file.source)

  const serviceNames = findServiceNames(j, root)

  serviceNames && serviceNames.forEach(serviceName => console.log(`"${serviceName}": "${file.path}",`))
}

function findServiceNames (j, root) {
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

  if (!path.size()) {
    return null
  }

  const names = path.nodes()
    .map(node => node.arguments[0])
    .filter(arg => arg)
    .map(arg => arg.value)

  return names
}
