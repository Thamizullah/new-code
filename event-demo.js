const EventEmitter = require('events')
const Event = new EventEmitter();

Event.on('click',()=>{
    console.log('click event occured...')
})

Event.emit('click')  //triggering the event