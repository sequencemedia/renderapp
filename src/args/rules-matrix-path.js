import debug from 'debug'

import args from '~/src/args'

const log = debug('@sequencemedia')
const info = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:rules-matrix` is awake')

export function hasRulesMatrixPath () {
  info('hasRulesMatrixPath')

  return args.has('rulesMatrixPath')
}

export function getRulesMatrixPath () {
  info('getRulesMatrixPath')

  return args.get('rulesMatrixPath')
}
