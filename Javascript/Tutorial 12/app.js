// strings

let fullname = new String('Jack Sparrow')
console.log(fullname)
console.log(fullname.length)

var lorem = "Lorem ipsum dolor, sit amet consectetur intecbrussel adipisicing elit. Atque tempora tenetur itaque perspiciatis eos, voluptate reprehenderit illo mollitia corrupti nulla praesentium non, temporibus unde quis nisi! Nostrum esse lorem incidunt cumque"

var isLoremInTheText = lorem.indexOf('lorem'); // result if 'lorem' is in the string
console.log(isLoremInTheText,"lorem lorem find")

var consoleResult = lorem.lastIndexOf('intecbrussel');
consoleResult = lorem.search('voluptate')

//extracting strings
console.log(lorem)
consoleResult = lorem.slice(0,14);
consoleResult = lorem.substring(0,2);
consoleResult = lorem.replace('intecbrussel','Intec_Brussel') //replaces the one with the other
console.log(consoleResult)


// numbers

let salary = new Number(103948487)
console.log(salary)

// Boolean

let yes = new Boolean(true)
console.log(yes)

// opdracht : W3schools

var url = "http://www.w3schools.com/js/js_string_methods.asp"
getUrl = url.substring(7,24);
getUrl = url.slice(7,24); // or with slice
console.log(getUrl) 

var url = "https://www.w3schools.com/js/js_string_methods.asp";
var resultFirst = url.indexOf("w");
var resultLast = url.lastIndexOf('m');
var result = url.slice(8,25);

console.log(resultFirst)
console.log(resultLast)
 
console.log(result)