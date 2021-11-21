import debug from 'debug'

import {
  hasSocketProtocol,
  getSocketProtocol
} from '~/src/args/socket-protocol'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:socket-protocol` is awake')

if (!hasSocketProtocol()) throw Error('Socket Protocol not provided')
const SOCKET_PROTOCOL = getSocketProtocol()

export default SOCKET_PROTOCOL
