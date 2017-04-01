'use strict';

module.exports = transformer;

function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const config = require(options.config);

  const functionName = findFunctionName(j, root);
  const params = findFunctionParams(j, root, functionName);
  const paramNames = params.map(param => param.name);

  removeParams(j, root, params);

  return root
    .find(j.ExpressionStatement, {
      expression: {
        value: 'use strict'
      }
    })
    .forEach(path => {
      j(path).insertAfter(config.importStatmentGenerator(paramNames));
    }).toSource();
}

function removeParams(j, root, params) {
  params.forEach(param => {
    root
      .find(j.Identifier, {
        name: param.name,
        loc: param.loc
      })
      .forEach(path => {
        j(path).remove();
      });
  });
}

function findFunctionParams(j, root, functionName) {
  let params;

  root
    .find(j.FunctionDeclaration, {
      id: {
        name: functionName
      }
    })
    .forEach(path => {
      const { node } = path;
      params = node.params;
    });

  return params;
}

function findFunctionName(j, root) {
  let functionName;

  root
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
    .forEach(path => {
      const [name, fn] = path.node.arguments;
      functionName = fn.name;
    });

  return functionName;
}
