
const School = require('./lesson-5/school')

const school = new School()


school.on('Hello',({period,text})=>
{
    console.log('HALLOOO ',period,text)
})

school.startPeriod();