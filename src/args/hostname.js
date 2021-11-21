import args from '~/src/args'

export function hasHostname () {
  return args.has('hostname')
}

export function getHostname () {
  return args.get('hostname')
}
