//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name) {
  	if (name === 'Tyler') {
  		return true;
  	}else{return false;}
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName(){
  	var name = prompt("What's your name?");
  	return name;
  }


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome(){
  	var name = getName();
  	alert("Welcome, " + name);
  }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here

  // Arguments are actual values passed into the function for use
  // whereas a parameter acts as a variable being passed in for 
  // function use


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  // Falsy values in Javascript are 0, undefined, null, 
  // NaN(Not a Number), false, ''.

  // To check for falsy:

  // if(!something){
  // 	return "falsy"
  // }



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName() {
  	return "Shakib"
  }

  


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;

//Now alert the result of invoking newMyName
  alert (newMyName);



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn() {
  	return function () {
  		return "Nazmuz Shakib Pranto";
  	}
  }


//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();

//Now invoke innerFn.
	innerFn();
