import debug from 'debug'

import {
  hasSecure,
  getSecure
} from '~/src/args/secure'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp:secure` is awake')

if (!hasSecure()) throw Error('Secure not provided')
const SECURE = String(getSecure()) === 'true'

export default SECURE
