var moment = require('moment-jalaali');


console.log(moment().format('jYYYY/jM/jD'));



var now = moment();
console.log('current time stamp is :', now.unix());





var timestamp = 1507930766;
var currentMoment = moment.unix(timestamp);
console.log('current moment is :', currentMoment.format());
console.log('date and time is:', currentMoment.format('MMM D, YY @ h:mm a'));
console.log('anoter format:', currentMoment.format('MMMM Do, YYYY @ h:mm A'));



m = moment('1396/7/22', 'jYYYY/jM/jD') // Parse a Jalaali date
console.log(m.format('jYYYY/jM/jD [is] YYYY/M/D')) // 1360/5/26 is 1981/8/17

console.log(m.jYear()) // 1360
console.log(m.jMonth()) // 4
console.log(m.jDate()) // 26
console.log(m.jDayOfYear()) // 150
console.log(m.jWeek()) // 22
console.log(m.jWeekYear()) // 1360


console.log("-------------------");

console.log( moment().format('jYYYY/jMMMM/jD'));

moment.loadPersian();
console.log( moment().format('jYYYY/jMMMM/jD'));

moment.loadPersian(true); 
console.log( moment().format('jYYYY/jMMMM/jD'));