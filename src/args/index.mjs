import debug from 'debug'

import yargsParser from 'yargs-parser'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:args` is awake')

export default new Map(Object.entries(yargsParser(process.argv.slice(2))))
