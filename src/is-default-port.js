import secure from './secure'
import port from './port'

const IS_DEFAULT_PORT = (
  secure
    ? port === 443
    : port === 80
)

export default IS_DEFAULT_PORT
