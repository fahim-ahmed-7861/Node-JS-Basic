

const EventEmitter = require('events');


class School extends EventEmitter
{
    startPeriod=()=>
    {
        
    setTimeout(()=>
    {
        console.log('class started');
    
        this.emit('Hello',{
            period : 'we need to run',
            text : 'Hello'
        })
    },2000)
    }
}

module.exports =School