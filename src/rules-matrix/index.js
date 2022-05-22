import debug from 'debug'

import xlsx from 'node-xlsx'

import {
  hasRulesMatrixPath,
  getRulesMatrixPath
} from '~/src/args/rules-matrix-path'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:rules-matrix` is awake')

if (!hasRulesMatrixPath()) throw new Error('Rules Matrix path not provided')
const RULES_MATRIX_PATH = getRulesMatrixPath()
const [
  {
    data: RULES_MATRIX = []
  } = {}
] = xlsx.parse(RULES_MATRIX_PATH)

export {
  RULES_MATRIX_PATH
}

export default RULES_MATRIX
