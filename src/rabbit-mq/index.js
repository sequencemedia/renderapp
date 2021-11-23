import debug from 'debug'

import {
  publish,
  consume
} from '@sequencemedia/rabbit-mq'

import {
  hasAppSettingsForAppMode,
  getAppSettingsForAppMode
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

function getRabbitMQFromAppSettingsForAppMode (appSettings, appMode) {
  info('getRabbitMQFromAppSettingsForAppMode')

  if (hasAppSettingsForAppMode(appSettings, appMode)) {
    const {
      RabbitMQData = {}
    } = getAppSettingsForAppMode(appSettings, appMode)

    return RabbitMQData
  }

  throw new Error(`RabbitMQ configuration was not found for AppMode "${appMode}"`)
}

export {
  transformForRabbitMQ,
  getRabbitMQFromAppSettingsForAppMode,
  publish,
  consume
}
