function add(a,b) {
	return a+b;
}

console.log(add(2,3));

var toAdd = [91, 5];

console.log(add(...toAdd));

//----------------------------

var groupA = ['jen', 'cory'];
var groupB = ['ali'];
var final  = [3, ...groupA];

console.log(final);

//------------------

var person = ['andrew', 25];
var personTwo = ['jen', 29];

function greet (name, age){
	console.log('hi' + name + ', you are' + age);
}

greet(...person);
greet(...personTwo);


var names = ['mike', 'ben'];
var final = ['andrew', ...names];

final.forEach(function(name){
	console.log('hi ' + name);
});