import args from '~/src/args'

export function hasCachePath () {
  return args.has('cachePath')
}

export function getCachePath () {
  return args.get('cachePath')
}
