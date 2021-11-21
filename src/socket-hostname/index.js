import debug from 'debug'

import {
  hasSocketHostname,
  getSocketHostname
} from '~/src/args/socket-hostname'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:socket-hostname` is awake')

if (!hasSocketHostname()) throw Error('Socket Hostname not provided')
const SOCKET_HOSTNAME = getSocketHostname()

export default SOCKET_HOSTNAME
