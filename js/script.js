// DAY ONE###############################################################################################

// alert("Hello, World");
// alert("Hello, JavaScript Bais Course!");

//DAY TWO ##########################################################################################################

// var myVariable = ; // undifined variable
// var string = "This is a string";
// var number = 12;
// var boolean = true or false;

// DAY THERE #########################################################################################################

// var sum = 3 + 5, // 8
//     difference = 5 - 2, // 3
//     product = 4 * 5, // 20
//     division = 6 / 3; // 2

// var sum = 3 + 7 + "2"; // "102"  The result is string   
// var sum = "2" + 7; // "27"   The result is string  
// var sum = "2" + 7 + 3; // "273"   The result is string  
// var sum = 3 + 5 + "2" + 7 + 3; // "8273"   The result is string  
// var sum = 3 + ""; // "3"   The result is string // using empty string


// var sum = parseInt("20", 10); // 20 This is how to change string to number
// var sum = parseInt("s", 10); // NaNah, If We use letter then the result is 'NaNah'
// var sum = parseFloat("3.14", 10); // 3.14

// THIS IS DAy FOUR #########################################################################################################

// //set one
// var foo = 2 + 3; // 5
// foo = foo + 1 // 6
// foo = foo * 8; // 48

// //set two
// var bar = 3 + 3; // 6
// bar = bar + 1 // 7
// bar = bar * 8; // 56

// alert(foo);
// alert(bar);

// Instead of writing the code above we can use "Function" below.
//set one
// var foo = doSomething(2); // 48

// //set two
// var bar = doSomething(3); // 56

// function doSomething(paramOne) {
//     paramOne = paramOne + 3;
//     paramOne = paramOne + 1;
//     paramOne = paramOne * 8;

//     return paramOne;
// }

// alert(foo);
// alert(bar);


// WE CAN ALSO USE MORE THEN ONE 'PARAM'.

// var foo = doSomething(2, 2); // 96

// //set two
// var bar = doSomething(3, 2); // 112

// function doSomething(paramOne, paramTwo) {
//     paramOne = paramOne + 3;
//     paramOne = paramOne + 1;
//     paramOne = paramOne * 8;

//     return paramOne * paramTwo;
// }

// alert(foo);
// alert(bar);

// WE CAN ALSO DO AN ANONIMOUS FUCNTION

// var doSomething = function(paramOne, paramTwo) {
//     paramOne = paramOne + 3;
//     paramOne = paramOne + 1;
//     paramOne = paramOne * 8;

//     return paramOne * paramTwo;
// }
// var foo = doSomething(2, 2); // 96

// //set two
// var bar = doSomething(3, 2); // 112


// alert(foo);
// alert(bar);

// WE CAN ALSO PASS A FUNCTION TO ANOTHER FUNCTION

// var doSomething = function(paramOne, paramTwo, fn) {
//     paramOne = paramOne + 3;
//     paramOne = paramOne + 1;
//     paramOne = paramOne * 8;

//     return fn(paramOne, paramTwo);
// }

// function sum(paramOne, paramTwo) {
//     return paramOne + paramTwo;
// }

// function product(paramOne, paramTwo) {
//     return paramOne * paramTwo;
// }

// var foo = doSomething(2, 2, sum); // 96

// //set two
// var bar = doSomething(3, 2, product); // 112


// alert(foo);
// alert(bar);

// WE CAN USE ANONIMOUR FUNCTION AS A VARIABLE VALUE
// var doSomething = function(paramOne, paramTwo, fn) {
//     paramOne = paramOne + 3;
//     paramOne = paramOne + 1;
//     paramOne = paramOne * 8;

//     return fn(paramOne, paramTwo);
// }

// var foo = doSomething(2, 2, function(paramOne, paramTwo) {
//     return paramOne + paramTwo;
// }); // 96

// //set two
// var bar = doSomething(3, 2, function(paramOne, paramTwo) {
//     return paramOne * paramTwo;
// }); // 112


// alert(foo);
// alert(bar);

// GLOBAL SCOPE
// var globalVar = "This is a global variable";


// var globalFunction = function() {
//     alert(globalVar);
//     globalVar = "The value has been modified";
// }

// globalFunction();
// alert(globalVar);

// DAY 6 WORKING WITH OBJECT #######################################################################################
//  var obj = 'This is a string object.',
//      length = 'obj.length'; // 24

//      var index1 = obj.indexOf('is'); // 2
//      var index2 = obj.indexOf('is', index + 1); // 5
//      var index3 = obj.indexOf('this'); // -1 the reason there is no t width small letter


//      alert(index)1;
//      alert(index)2;
//      alert(index)3;

     //WE CAN DO THIS PROCCESS FROM THE LEFT TO RIGHT USING 'lastindex'


//      var obj = 'This is a string object.',
//          length = 'obj.length'; // 24


// var index1 = obj.lastIndexOf('is');
// var index2 = obj.lastIndexOf('is', index2 - 1);



// alert(index1);
// alert(index2);

// HOW TO SUBSTRUCT THE WORD IN OBJ VARIABLE

// var obj = 'This is a string object.',
//          length = 'obj.length'; // 24

// var substr1 = obj.indexOf('st');
// var substr2 = obj.substr(substr1, 6);


// var newString = obj.replace("object", "new");

// var upperCase = obj.toUpperCase(),
//     lowerCase = obj.toLowerCase();

// alert(upperCase);
// alert(lowerCase);
// alert(obj);


// THIS IS DAY 7 SUNING OBJECT ################################################################################ OBJECT IS USED FOR STORING COMPLEX DATA



// This is the old method
// var person = new Object();

// person.firstName = "Ali";
// person.lastName = "Ashoo";
// person.getFullname = function() {
//     return person.firstName + " " + person.lastName;
// }


// alert(person.getFullname());
         
//THIS IS THE NEW METHOD

// var person = {
//     firstName : "Ali",
//     lastName : "Ashoo",
//     getFullName : function() {
//         return this.lastName + " " + this.lastName;
//     }
// };

// alert(person.getFullName());

// DAY 8 WHAT IS 'ARRAY'################################################################################## ARRAY IS USED FOR STORING SIQUENCE DATA

// THIS IS AN OLD SCHOOL METHOD:
// var foo = new Array(11, "Hello World", true);

// var length = foo.length;

// var value = foo[0];
// foo[0] = 12;
// foo[1] = 13;

// alert(value);

// THIS IS A NEW SCHOOL METHOD(ARRAY LITTERAL SYNTAX):
// var foo = [11, "Hello World", true];

// var value = foo[0];

// var newValue = foo[1] = 20;

// alert(newValue);

// var names = ["ALi", "Khan"],
//     names2 = ["Sadiq", "Safayee"];

// var people = names.concat(names2);

// var joined = people.reverse();


// alert(joined);
// ######################################################### HOW THE BROWERS WORK ###############

// var foo = "Hello Variable";

// var bar = function() {
//      var foo = "Hello Function";
//     alert(window.foo);
// }
// bar();


// var name = "Ali";

// window.alert(name);


// ############################## HOW TO ACCESS THE HTML ELEMENTS

// THIS IS AN OLD METHOD USING IMEDIATLY INVOKED FUNCTION EXPRESION(IIFE)
// FIRST METHOD:
// (function () {
//     var pElements = document.getElementsByTagName('p'); // NodeList
//     alert(pElements.length);
// })();

// SECOND METHOD:

// (function () {
//     var pElements = document.getElementsByTagName('p'); // NodeList

//     for (var i = 0, len = pElements.length; i < len; i = i + 1){
//         alert(pElements[i]);
//     }

// })();

// THIS IS HOW TO CREATE A NEW ELEMENT

// (function () {

//     var pElements = document.getElementsByTagName('p'); // NodeList
//          alert(pElements.length); // 5

//     var pl = document.createElement("p");

//     document.body.appendChild(pl);

//     alert(pElements.length); //6

// })();

// IN THIS TIME WE ARE GOING TO USE QUERY SELECTORS

// (function () {

//     var pElements = document.querySelectorAll('p'); // NodeList
//          alert(pElements.length); // 5

//     var pl = document.createElement("p");

//     document.body.appendChild(pl);
//     pElements = document.querySelectorAll('p');

//     alert(pElements.length); //6

// })();


// (function () {

//     var pl = document.createElement("p"),

//     content = document.createTextNode("This is a new paragraph added to the HTML page");

//     pl.appendChild(content);
//     pl.setAttribute("align", "center");
//     pl.id = "bar";

//         document.body.appendChild(pl);
// })();
 
// ############################################# USING DOC CAN MAKE OUR CODE EXECUTE FASTER AND ALSO ADD AN ELEMENT INSIDE THE DIV;

// (function () {

//     var  doc = document,
//     pl = doc.createElement("p"),
//     content = doc.createTextNode("This is a new paragraph added to the HTML page"),
//     pFoo = doc.getElementById("foo");

//     pl.appendChild(content);
//     pl.id = "bar";
//     // pl.setAttribute("align", "center");

//     // pFoo.parentNode.appendChild(pl);
//     pFoo.parentNode.insertBefore(pl, pFoo);
//     // doc.body.appendChild(pl);

// })();

// ####################################################################################### HOW TO COLCULATE AGE OF A PERSON#####################

// function calculateAge(yearOfBirth) {
//     var age = 2019 - yearOfBirth;
//     return age;
// }

// var ageJhon = calculateAge(1995);
// var ageSmith = calculateAge(1989);
// var ageMike = calculateAge(1987);
// console.log(ageJhon);
// console.log(ageSmith);
// console.log(ageMike);


// var retireAge = 65,
//     age = 23,
//     remaingYear = retireAge - age;

//     console.log("The remaing year for retirement is " + remaingYear);



// ##################################################################### ARRAY IN JAVSCRIPT ##################//#endregion

// var persons = ["Ali", "Hajee", "Khan"];
// var years = new Array(1995, 1994, 1992);

// console.log(persons[0]);
// persons[1] = "Sadiq";
// console.log(persons);

// var smith = ['Smith', 'Safari', 1993, 'doctor', true];

// smith.push('blue'); // This adds value to the end.
// smith.unshift('Mr.'); // This adds value to the first.
// smith.pop(); // This removes the last value.
// smith.shift(); // This removes the first value.
// console.log(smith);

// if (smith.indexOf('teacher') === -1) {
//     console.log('Smith is not a teacher');
// }


// ##################################################################### OBJECTS IN JAVASCRIPT ##################//#endregion
//  var person = {
//      name: 'Ali',
//      lastName: 'Khan',
//      job: 'student',
//      married: false
//  };

//  console.log(person.name);
//  console.log(person['lastName']);

// ############################################################################### FOR LOOPS IN JAVASCRIPT###################################//#endregion
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }


// var friends = ['Ali', 'Khalid', 'Safar', 'Moien', 'Farid'];

// for (var i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
//     alert(friends[i]);    
// }

// ########################################## IF WE WANT THE NAMES TO BE CALLED FROM 5 TO 0 THEN ###########


// var friends = ['Ali', 'Khalid', 'Safar', 'Moien', 'Farid'];

// for (var i = friends.length; i >= 0; i--) {
//     console.log(friends[i]);
//     // alert(friends[i]);    
// }

// ################################################################## HWILE LOOPS #######################
var friends = ['Ali', 'Khalid', 'Safar', 'Moien', 'Farid'];

// var i = 0;
// while(i < friends.length) {
//     console.log(friends[i]);
//     i++;
// }

for (var i = 0; i < 10; i++) {
        console.log(i);
    }  