///////////////////////////////////////

// Lecture: Hoisting
/* 
// FUNCTIONS
calculateAge(1965);

function calculateAge(year) {
  console.log(1, 2016 - year, 51); // 51
}

// retirement(1965); // doesn't work because function expression below tied to varaible retirement is not hoisted, function declerations are
var retirement = function (year) {
  console.log(2, 65 - (2016 - year));
};

//VARIABLES
console.log(3, age, "undefined"); // hoisted but undefined
var age = 23;
console.log(4, age, "23"); // 23

var foo = function () {
  // function foo() {
  console.log(5, age, "undefined"); // hoisted but undefined!!!! becuse of line below
  var age = 65; // jak jest var to to jest zmienna w środku i nic nie zmienia na zewnątrz, dodatkowo w linicje wyzej w związku z tym jest undifiend
  console.log(6, age, "65"); // 65
};
foo();
console.log(7, age, "23"); // 23

// FUNCTIONS
calculateAge2(1965);

function calculateAge2(year) {
  console.log(11, 2016 - year, 51); // 51
}

// retirement2(1965); // doesn't work because function expression below tied to varaible retirement is not hoisted, function declerations are
var retirement2 = function (year) {
  console.log(12, 65 - (2016 - year));
};

//VARIABLES
console.log(13, age2, "undefined"); // hoisted but undefined
var age2 = 23;
console.log(14, age2, "23"); // 23

var foo2 = function () {
  // function foo2() {
  console.log(15, age2, "23!!"); // nie wyskakuje undefiend bo jest zdefiniowana poza tą funkcją a ta funkcja zmienia tylko jej wartość
  age2 = 65; // jak nie ma var to zmienia wartość
  console.log(16, age2, "65"); // 65
};
foo2();
console.log(17, age2, "65!!"); // 65
 */
// jak to działa w kontekscie oboektów i let oraz const??????
// co ciekawe
// var foo2 = function () {
// daje taki sam efekt jak
// function foo2() {
// ze zwykłym foo tez nie ma znaczenia czy function decleration czy expression

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain
/* 
var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  console.log(a + "b" + "c" + d); // b i c muszą być jako tekst bo ta funckja nie ma dostępu do tych zmiennych. Lexical scoping
}
 */

///////////////////////////////////////
// Lecture: The this keyword
//console.log(this);
/*
calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
*/

var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    /* // ta funkcja zwraca window bo jest wewnętrzna
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  },
 */

    /*   // ta funkcja TAKŻE zwraca window bo jest wewnętrzna
    var innerFunction2 = function () {
      console.log(this);
    };
    innerFunction2();
  },
 */
    /* 
    // ta też
    (function () {
      console.log(this);
    })();
  }, 
 */

    //  ta nie, ta zwraca John object bo fat arrow sprawia, że object się nie zmienia
    (() => {
      console.log(this);
    })();
  },
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
