import args from '~/src/args'

export function hasSocketHostname () {
  return args.has('socketHostname')
}

export function getSocketHostname () {
  return args.get('socketHostname')
}
