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
// co ciekawe
// var foo2 = function () {
// daje taki sam efekt jak
// function foo2() {
// ze zwykłym foo tez nie ma znaczenia czy function decleration czy expression

// jak to działa w kontekscie OBIEKTÓW:
/* 
// FUNCTIONS
calculateAge({ year: 1965 });

function calculateAge(y) {
  console.log(1, 2016 - y.year, 51); // 51
}

// retirement({ year: 1965 }); // doesn't work because function expression below tied to varaible retirement is not hoisted, function declerations are
var retirement = function (y) {
  console.log(2, 65 - (2016 - y.year));
};

//VARIABLES
// console.log(3, age.a, "undefined"); // Cannot read property 'a' of undefined
var age = { a: 23 };
console.log(4, age.a, "23"); // 23

var foo = function () {
  console.log(5, age, "{ a: 23 }"); //
  age.a = 65; //
  console.log(6, age.a, "65"); // 65
  // OR
  //   console.log(5, age, "undefined"); //
  //   var age = { a: 65 }; //
  //   console.log(6, age.a, "65"); // 65
  // OR:
  //   console.log(5, age, "{ a: 23 }"); // hoisted but undefined!!!! becuse of line below
  //   age = { a: 65 }; // jak jest var to to jest zmienna w środku i nic nie zmienia na zewnątrz, dodatkowo w linicje wyzej w związku z tym jest undifiend
  //   console.log(6, age.a, "65"); // 65
};
foo();
console.log(7, age.a, "23/65"); // 23 if age declared in foo, 65 if not // 65 if not declared, only value of age changed - zgadza się, czaję
*/
/* 
// JESZCZE RAZ:
// NIE PASSED JAKO ARUMENT
var agePrimitive1 = 23;
var ageObject1 = { a: 23 };

var foo1 = function () {
  console.log("01", agePrimitive1, "23 / undefined if redeclared");
  console.log("02", ageObject1, "{ a: 23 } / undefined if redeclared");

  // agePrimitive1 = 65;
  var agePrimitive1 = 65; // jak jest var to to jest zmienna w środku i nic nie zmienia na zewnątrz, dodatkowo 2 linijki wyżej w związku z tym jest undifiend

  // ageObject1 = { a: 65 }; //
  var ageObject1 = { a: 65 }; // jak jest var to to jest zmienna w środku i nic nie zmienia na zewnątrz, dodatkowo 2 linijki wyżej w związku z tym jest undifiend

  console.log("03", agePrimitive1, "65"); // 65
  console.log("04", ageObject1.a, "65"); // 65
};

foo1();

console.log("05", agePrimitive1, "65 / 23 if redeclared"); // 65
console.log("06", ageObject1.a, "65 / 23 if redeclared"); // 23 if age declared in foo, 65 if not // 65 if not declared, only value of age changed - zgadza się, czaję. czy można, wolno, to jest ok, good practice deklarować wewnątrz funckji zmienną, która jest zadeklarowana i zdefiniowana na zewnątrz?

// PASSED JAKO ARUMENT
var agePrimitive2 = 23;
var ageObject2 = { a: 23 };

var foo2 = function (x, y, z) {
  // jemu się zdaje, że nie użyłem x ani z
  console.log("07", agePrimitive2, 23);
  console.log("08", ageObject2.a, 23);

  x = 65;
  // y = { a: 65 }; //
  y.a = 65;

  console.log("09", agePrimitive2, "23 nie 65!!"); // 65
  console.log(
    "10",
    ageObject2.a,
    "65 jeżeli y.a = 65 // x = 65 -> 23 nie 65!!"
  ); // 65
};

foo2(agePrimitive2, ageObject2);

console.log("11", agePrimitive2, "23 nie 65!!"); // 65
console.log("12", ageObject2.a, "65 jeżeli y.a = 65 // x = 65 -> 23 nie 65!!"); // 23 if age declared in foo, 65 if not // 65 if not declared, only value of age changed - zgadza się, czaję. czy można, wolno, to jest ok, good practice deklarować wewnątrz funckji zmienną, która jest zadeklarowana i zdefiniowana na zewnątrz?
 */
// czyli w przypadku primitives jest jak w przypadku oboektów (chyba, że pdajesz jako argument).
// czaję, tylko czemu podanie funcji jako argument lub zapisanie na sztywno czyni różnicę?

// jak to działa z let oraz const??????:
/* 
// LET:
let agePrimitive1 = 23;
let ageObject1 = { a: 23 };

let foo1 = function () {
  console.log("01", agePrimitive1, "23 / wywala błąd if redeclared");
  console.log("02", ageObject1, "{ a: 23 } / wywala błąd if redeclared");

  agePrimitive1 = 65;
  // let agePrimitive1 = 65; // jak jest let to to jest zmienna w środku i nic nie zmienia na zewnątrz, dodatkowo 2 linijki wyżej w związku z tym jest undifiend

  ageObject1 = { a: 65 }; //
  // let ageObject1 = { a: 65 }; // jak jest let to to jest zmienna w środku i nic nie zmienia na zewnątrz, dodatkowo 2 linijki wyżej w związku z tym jest undifiend

  console.log("03", agePrimitive1, "65"); // 65
  console.log("04", ageObject1.a, "65"); // 65
};

foo1();

console.log("05", agePrimitive1, "65 / 23 if redeclared"); // 65
console.log("06", ageObject1.a, "65 / 23 if redeclared"); // 23 if age declared in foo, 65 if not // 65 if not declared, only value of age changed - zgadza się, czaję. czy można, wolno, to jest ok, good practice deklarować wewnątrz funckji zmienną, która jest zadeklarowana i zdefiniowana na zewnątrz?

// PASSED JAKO ARUMENT
let agePrimitive2 = 23;
let ageObject2 = { a: 23 };

let foo2 = function (x, y, z) {
  // jemu się zdaje, że nie użyłem x ani z
  console.log("07", agePrimitive2, 23);
  console.log("08", ageObject2.a, 23);

  x = 65;
  y = { a: 65 }; //
  // y.a = 65;

  console.log("09", agePrimitive2, "23 nie 65!!"); // 65
  console.log(
    "10",
    ageObject2.a,
    "65 jeżeli y.a = 65 // x = 65 -> 23 nie 65!!"
  ); // 65
};

foo2(agePrimitive2, ageObject2);

console.log("11", agePrimitive2, "23 nie 65!!"); // 65
console.log("12", ageObject2.a, "65 jeżeli y.a = 65 // x = 65 -> 23 nie 65!!"); // 23 if age declared in foo, 65 if not // 65 if not declared, only value of age changed - zgadza się, czaję. czy można, wolno, to jest ok, good practice deklarować wewnątrz funckji zmienną, która jest zadeklarowana i zdefiniowana na zewnątrz?
 */
// pomiędzy let i var nie ma różnicy za wyjkątkiem, że nie można 2. raz deklarować zmiennej. spoko
// z tego co widzę to z const jest tak samo
/* 
// CONST:
const agePrimitive1 = 23;
const ageObject1 = { a: 23 };

const foo1 = function () {
  console.log("01", agePrimitive1, "23 / wywala błąd if redeclared");
  console.log("02", ageObject1, "{ a: 23 } / wywala błąd if redeclared");

  agePrimitive1 = 65;
  // const agePrimitive1 = 65; // jak jest const to to jest zmienna w środku i nic nie zmienia na zewnątrz, dodatkowo 2 linijki wyżej w związku z tym jest undifiend

  ageObject1 = { a: 65 }; //
  // const ageObject1 = { a: 65 }; // jak jest const to to jest zmienna w środku i nic nie zmienia na zewnątrz, dodatkowo 2 linijki wyżej w związku z tym jest undifiend

  console.log("03", agePrimitive1, "65"); // 65
  console.log("04", ageObject1.a, "65"); // 65
};

foo1();

console.log("05", agePrimitive1, "65 / 23 if redeclared"); // 65
console.log("06", ageObject1.a, "65 / 23 if redeclared"); // 23 if age declared in foo, 65 if not // 65 if not declared, only value of age changed - zgadza się, czaję. czy można, wolno, to jest ok, good practice deklarować wewnątrz funckji zmienną, która jest zadeklarowana i zdefiniowana na zewnątrz?

// PASSED JAKO ARUMENT
const agePrimitive2 = 23;
const ageObject2 = { a: 23 };

const foo2 = function (x, y, z) {
  // jemu się zdaje, że nie użyłem x ani z
  console.log("07", agePrimitive2, 23);
  console.log("08", ageObject2.a, 23);

  x = 65;
  y = { a: 65 }; //
  // y.a = 65;

  console.log("09", agePrimitive2, "23 nie 65!!"); // 65
  console.log(
    "10",
    ageObject2.a,
    "65 jeżeli y.a = 65 // x = 65 -> 23 nie 65!!"
  ); // 65
};

foo2(agePrimitive2, ageObject2);

console.log("11", agePrimitive2, "23 nie 65!!"); // 65
console.log("12", ageObject2.a, "65 jeżeli y.a = 65 // x = 65 -> 23 nie 65!!"); // 23 if age declared in foo, 65 if not // 65 if not declared, only value of age changed - zgadza się, czaję. czy można, wolno, to jest ok, good practice deklarować wewnątrz funckji zmienną, która jest zadeklarowana i zdefiniowana na zewnątrz?
 */
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
/* 
var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

//     // ta funkcja zwraca window bo jest wewnętrzna
//     function innerFunction() {
//       console.log(this);
//     }
//     innerFunction();
//   },

//       // ta funkcja TAKŻE zwraca window bo jest wewnętrzna
//     var innerFunction2 = function () {
//       console.log(this);
//     };
//     innerFunction2();
//   },
    
//     // ta też
//     (function () {
//       console.log(this);
//     })();
//   }, 


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
 */
// nie nalezy mutować zmiennych generalnie. Jak inaczej działać jeszcez nie czaję, ale na razie to zostawiam. Co najwyżej później do tego wrócę