const EventEmitter = require('events');
const uuid = require('uuid');
const { LOADIPHLPAPI } = require('dns');
class Logger extends EventEmitter{
    log(msg){
        this.emit('message',{id:uuid.v4(), msg});
    }
}
module.exports = Logger ;