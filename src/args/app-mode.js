import args from '~/src/args'

export function hasAppMode () {
  return (
    args.has('web') ||
    args.has('dealership')
  )
}

export function getAppMode () {
  if (args.has('web')) return 'web'
  if (args.has('dealership')) return 'dealership'
}
