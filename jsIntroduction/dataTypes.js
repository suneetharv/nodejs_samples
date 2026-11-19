/*
  Variable names are case sensitive, cannot be keywords(like var , let , if , else etc)
  Must start with a letter, '_' or '$'.
  Variables names cannot start with numbers

  var and let are used to declare variables
  const is used to declase constants.Initialize constant at the time of declaration.Once initilized it cannot be changed.
*/

//declare a variable empName and assign value String1 to it.
let empName = "John"
console.log(empName);

//declare a variable empAge and assign a  value 5 to it
let empAge =25;
console.log(empAge);

//assign 10 to varible empAge
empAge=30;
console.log(empAge);

//declare a constant empId and assign 123 to it
const empId =123;
console.log(empId);

/*

Type Conversions : Implicit Conversion - Autotatic Conversion
                  Explicit Conversion - Manual Type Conversion
*/
//numeric string used with + gives string type. 
// Implicit Conversion - Convert number to string

let result;

result = "3" + 2;
console.log(result);
result = "3" + true;
console.log(result);
result = "3" + null;
console.log(result);

//Explicit Conversion


result = Number("5");
console.log(result + " _ " + typeof(result));
result = String(true);
console.log(result + " _ " + typeof(result));
result = Boolean(1);
console.log(result + " _ " + typeof(result));