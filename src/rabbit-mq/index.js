import debug from 'debug'

import {
  publish,
  consume
} from '@sequencemedia/rabbit-mq'

import {
  hasSettingsForAppMode,
  getSettingsForAppMode
} from '~/src/app-settings'

const log = debug('@sequencemedia/renderapp')
const info = debug('@sequencemedia/renderapp:rabbit-mq')

log('`@sequencemedia/renderapp:rabbit-mq` is awake')

const transformForRabbitMQ = ({
  Enabled: enabled,
  Port: port,
  HostName: hostname,
  UserName: username,
  Password: password,
  VirtualHost: virtualHost,
  Exchange: exchange,
  QueueName: queueName,
  RoutingKey: routingKey
}) => ({
  enabled,
  port,
  hostname,
  username,
  password,
  virtualHost,
  exchange,
  queueName,
  routingKey
})

function getRabbitMQFromSettingsForAppMode (settings, appMode) {
  info('getRabbitMQFromSettingsForAppMode')

  if (hasSettingsForAppMode(settings, appMode)) {
    const {
      RabbitMQData = {}
    } = getSettingsForAppMode(settings, appMode)

    return RabbitMQData
  }

  throw new Error(`RabbitMQ configuration was not found for AppMode "${appMode}"`)
}

export {
  transformForRabbitMQ,
  getRabbitMQFromSettingsForAppMode,
  publish,
  consume
}
