'use strict'

module.exports = transformer

function transformer (file, api, options) {
  const j = api.jscodeshift
  const root = j(file.source)

  const serviceName = findServiceName(j, root)
  serviceName && console.log(`"${serviceName}": "${file.path}",`)
}

function findServiceName (j, root) {
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

  const [name] = path.get().node.arguments

  if (!name) {
    return null
  }

  return name.value
}
