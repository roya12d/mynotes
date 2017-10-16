// import moment from 'moment';

var moment = require('moment');


console.log(moment().format());

var now = moment();
console.log('current time stamp is :', now.unix());


var timestamp = 1507930766;
var currentMoment = moment.unix(timestamp);
console.log('current moment is :', currentMoment.format());
console.log('date and time is:', currentMoment.format('MMM D, YY @ h:mm a'));
console.log('anoter format:', currentMoment.format('MMMM Do, YYYY @ h:mm A'));


