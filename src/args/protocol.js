import args from '~/src/args'

export function hasProtocol () {
  return args.has('protocol')
}

export function getProtocol () {
  return args.get('protocol')
}
