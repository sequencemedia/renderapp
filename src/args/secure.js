import args from '~/src/args'

export function hasSecure () {
  return args.has('secure')
}

export function getSecure () {
  return args.get('secure')
}
