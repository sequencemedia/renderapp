"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _debug=_interopRequireDefault(require("debug"));var _hostname=require("../args/hostname");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const log=(0,_debug.default)('@sequencemedia/renderapp');log('`@sequencemedia/renderapp:hostname` is awake');if(!(0,_hostname.hasHostname)())throw Error('Hostname not provided');const HOSTNAME=(0,_hostname.getHostname)();var _default=HOSTNAME;exports.default=_default;