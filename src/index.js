import debug from 'debug'

import path from 'path'

import {
  UltimateTextToImage
} from 'ultimate-text-to-image'

import io from 'socket.io-client'

import protocol from './protocol'
import hostname from './hostname'
import secure from './secure'
import rulesMatrix from './rules-matrix'
import appSettings from './app-settings'
import appMode from './app-mode'
import cachePath from './cache-path'

import {
  transformForRabbitMQ,
  getRabbitMQFromSettingsForAppMode,
  consume
} from './rabbit-mq'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp` is awake')

const RULES_MATRIX = rulesMatrix.slice(1)
const FRONT_END_RULE = 3
const NAME = 15

const isTruthy = (v) => !!(v || '').trim()

const toFrontEndRule = (v) => '+'.concat(v)

function getNames (accumulator, rule) {
  const {
    [NAME]: name
  } = RULES_MATRIX.find(({
    [FRONT_END_RULE]: frontEndRule
  }) => frontEndRule === toFrontEndRule(rule))

  return accumulator.concat(name)
}

const socket = io.connect(`${protocol}://${hostname}?token=visitor`, { secure, 'sync disconnect on unload': true })

export default consume(transformForRabbitMQ(getRabbitMQFromSettingsForAppMode(appSettings, appMode)), ({ content }) => {
  log('handler')

  const {
    Configuration: configuration,
    Width: width,
    Height: height,
    ImageName: imageName,
    Extension: extension = '.jpg'
  } = content

  const text = imageName + '\n\n' + (
    configuration
      .split('+')
      .filter(isTruthy)
      .reduce(getNames, [])
      .join(' • ')
  )

  const textToImage = new UltimateTextToImage(text, {
    width,
    height,
    fontFamily: 'Courier New',
    fontColor: 0x00000000,
    fontSize: 24,
    lineHeight: 36,
    backgroundColor: 0xffffffff,
    margin: 24,
    align: 'center',
    valign: 'middle'
  })

  const fileName = imageName + extension
  const filePath = path.join(cachePath, fileName)
  const fileType = 'image/jpeg'

  textToImage
    .render()
    .toFile(
      filePath,
      fileType,
      {
        quality: 100
      })

  socket.emit('imageResponseToServer', JSON.stringify(content))
})
