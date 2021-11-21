import args from '~/src/args'

export function hasSocketProtocol () {
  return args.has('socketProtocol')
}

export function getSocketProtocol () {
  return args.get('socketProtocol')
}
