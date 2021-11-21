import debug from 'debug'

import {
  hasHostname,
  getHostname
} from '~/src/args/hostname'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:hostname` is awake')

if (!hasHostname()) throw Error('Hostname not provided')
const HOSTNAME = getHostname()

export default HOSTNAME
