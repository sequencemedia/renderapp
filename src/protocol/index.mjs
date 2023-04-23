import debug from 'debug'

import {
  hasProtocol,
  getProtocol
} from '#args/protocol'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:protocol` is awake')

if (!hasProtocol()) throw Error('Protocol not provided')
const PROTOCOL = getProtocol()

export default PROTOCOL
