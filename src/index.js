import debug from 'debug'

import path from 'path'

import {
  UltimateTextToImage
} from 'ultimate-text-to-image'

import io from 'socket.io-client'

import isDefaultPort from './is-default-port'
import protocol from './protocol'
import hostname from './hostname'
import port from './port'
import secure from './secure'
import rulesMatrix from './rules-matrix'
import appMode from './app-mode'
import cachePath from './cache-path'

import APP_SETTINGS from './app-settings'

import {
  transformForRabbitMQ,
  getRabbitMQFromAppSettingsForAppMode,
  consume
} from './rabbit-mq'

const log = debug('@sequencemedia/renderapp')

log('`@sequencemedia/renderapp` is awake')

const RULES_MATRIX = rulesMatrix.slice(1)
const FRONT_END_RULE = 3
const NAME = 15

const OPTIONS = {
  fontFamily: 'Courier New',
  fontColor: 0x00000000,
  fontSize: 24,
  lineHeight: 36,
  backgroundColor: 0xffffffff,
  margin: 24,
  align: 'center',
  valign: 'middle'
}

const isTruthy = (v) => !!(v || '').trim()

const toFrontEndRule = (v) => '+'.concat(v)

const getRulesMatrixRowFrontEndRule = ({ [FRONT_END_RULE]: frontEndRule }) => frontEndRule

const getRulesMatrixRowName = ({ [NAME]: name }) => name

function findRulesMatrixRowForFrontEndRule (frontEndRule) {
  /**
   *  log('findRulesMatrixRowForFrontEndRule')
   */
  return function isFrontEndRule (row) {
    /**
     *  log('isFrontEndRule')
     */
    return frontEndRule === getRulesMatrixRowFrontEndRule(row)
  }
}

function getNames (accumulator, rule) {
  /**
   *  log('getNames')
   */
  return (
    accumulator.concat(
      getRulesMatrixRowName(
        RULES_MATRIX.find(
          findRulesMatrixRowForFrontEndRule(
            toFrontEndRule(rule)
          )
        )
      )
    )
  )
}

const uri = isDefaultPort
  ? `${protocol}://${hostname}?token=renderinstance`
  : `${protocol}://${hostname}:${port}?token=renderinstance`
const parameters = { secure, 'sync disconnect on unload': true }

const socket = io.connect(uri, parameters)
const rabbit = transformForRabbitMQ(getRabbitMQFromAppSettingsForAppMode(APP_SETTINGS, appMode))

function handler ({ content }) {
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

  const ultimateTextToImage = new UltimateTextToImage(text, {
    ...OPTIONS,
    width,
    height
  })

  const fileName = imageName + extension
  const filePath = path.join(cachePath, fileName)
  const fileType = 'image/jpeg'

  ultimateTextToImage
    .render()
    .toFile(
      filePath,
      fileType,
      {
        quality: 100
      })

  socket.emit('imageResponseToServer', JSON.stringify(content))
}

export default consume(rabbit, handler)
