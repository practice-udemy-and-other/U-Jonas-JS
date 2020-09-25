///////////////////////////////////////
/*
// Lecture: Hoisting

// FUNCTIONS
calculateAge(1965);

function calculateAge(year) {
    console.log(1, 2016 - year); // 51
}

// retirement(1965); // doesn't work because function expression below tied to varaible retirement is not hoisted, function declerations are
var retirement = function(year) {
    console.log(2, 65- (2016 - year));
}


//VARIABLES
console.log(3, age); // hoisted but undefined
var age = 23;
console.log(4, age); // 23


function foo() {
    console.log(5, age); // hoisted but undefined!!!!
    var age = 65; // musi być "var"! duh!
    console.log(6, age); // 65
}
foo();
console.log(7, age); // 23
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
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
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
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        //function innerFunction() {
        //    console.log(this);
        //}
        //innerFunction();

    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/
