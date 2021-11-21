import args from '~/src/args'

export function hasRulesMatrixPath () {
  return args.has('rulesMatrixPath')
}

export function getRulesMatrixPath () {
  return args.get('rulesMatrixPath')
}
