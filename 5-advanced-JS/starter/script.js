////////////////////////////////////// 61

// Function constructor
/* 
//Object literal
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};
*/

////////////////////////////////////// 61 i 62
/* 
// Methods and properties Within Constructor
var Person = function (name, yearOfBirth, job) {
  // function Person(name, yearOfBirth, job) {
  // z tego co widzę to 2 powyższe linijki dają w sumie to samo i chyba są dokładnie tym samym
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
  };
  this.lastName = "Smith";
};
//
var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");
//
// console.log(Person);
// console.log(john);
// console.log(jane);
console.log(Person);
 */
/* 
// Yet the truth is, this approach might be wrong for many situations. In Javascript when you bind a method to the this keyword, you are providing that method to only that particular instance and it does not really have any relationship with an object instance of that constructor, pretty much like a static method. Keeping in mind that functions are first-class citizens in Javascript, we can deal with them just like objects, in this case we're only adding a property to an instance of a function object. Thats only part of the story, you must also know that any method attached via this will get re-declared for every new instance we create, which could affect the memory usage of the application negatively if we wish to create so many instances.
https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/
*/

////////////////////////////////////// 61 i 62

/* 
// Methods - using Prototype 
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
// john.calculateAge(); jane.calculateAge(); mark.calculateAge(); // musiałem wykomentować bo jeszcze nie było tej metody i całość się wykrzaczała
// console.log(john, jane, mark);
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth)
};
Person.prototype.lastName = 'Smith';
//
// john.calculateAge(); // dopiero po dodaniu Person.prototype.calculateAge = function()... (pojniżej dąło się do umieścic żeby) dało się wywołało
// jane.calculateAge(); 
mark.calculateAge();
//
// console.log(Person);
// console.log(john);
// console.log(jane);
console.log(mark); // dalej nie ma funcji ani property lastName w obiektach w przeciwieństwie gdy była ona umieszczona w konstruktorze

// console.log(john.lastName);
// console.log(jane.lastName);
console.log(mark.lastName);
 */

////////////////////////////////////// 63

/* 
// Object.create
var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" },
});
 */

////////////////////////////////////// 64

/* 
// Primitives vs. objects
//only numbers, strings, booleans, undefined, and null are primitives. 
// everything else -> objects
//variables containing primitives contain the DataCue.
// Variables containing objects contain reference

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a, b); // 46 23

// Objects
var obj1 = {
  name: "John",
  age: 26,
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age); // jak zatem zrobić nowy objekt, który wygląda tak samo i będzie go można mutować? bez zmiany pierwszego?

// Functions
var age = 27;
var obj = {
  name: "Jonas",
  city: "Lisbon",
};

function change(a, b) {
  a = 30; //
  b.city = "San Francisco";
}

change(age, obj); //
console.log(age, obj); // nie zmieniło wieku. Kurde. 
Funkcja change stworzyła kopię i na kopii dokonała zmiany. Trudno. ok. A jakbym chciał to faktycznie zrobić?
*/

////////////////////////////////////// 65
/*
// Lecture: Passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
// or:
var fullAges2 = arrayCalc(arrayCalc(years, calculateAge), isFullAge);
var heartRates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(fullAges2);
console.log(heartRates);
*/
////////////////////////////////////// 66

/* 
// Lecture: Functions returning functions // First class functions
// PO CO???????????????????????????????????????????
function interviewQuestions(job) {
  if (job === "designer") {
    return function (name) {
      console.log(`${name}, can you please what UX design is?`);
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log(`What subject do you teach, ${name}?`);
    };
  } else {
    return function (name) {
      console.log(`What do you do, ${name}?`);
    };
  }
}

var teacherQuestion = interviewQuestions("teacher");
var designerQuestion = interviewQuestions("designer");

teacherQuestion("John");
designerQuestion("Jane");

interviewQuestions("teacher")("Mark");
*/

////////////////////////////////////// 67

// Lecture: IIFE (Immediately invoked function expression)
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

////////////////////////////////////// 68

// Lecture: Closures

/* function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990); */

//retirement(66)(1990);

// small challange zrobić poniższe za pomocą closures
/* 
function interviewQuestions(job) {
    return function (name) {
        var question = '';
        if (job === "designer") {
            question =`${name}, can you please what UX design is?`;
        } else if (job === "teacher") {
            question = `What subject do you teach, ${name}?`;
        } else {
            question = `What do you do, ${name}?`;
        };
        console.log(question);
    }
}
*/
/* 
function interviewQuestions(job) {
  return function (name) {
    var question = "";
    switch (job) {
      case "designer":
        question = `${name}, can you please what UX design is?`;
        break;
      case "teacher":
        question = `What subject do you teach, ${name}?`;
        break;
      default:
        question = `What do you do, ${name}?`;
    }
    console.log(question);
  };
}

var teacherQuestion = interviewQuestions("teacher");
var designerQuestion = interviewQuestions("designer");

teacherQuestion("John");
designerQuestion("Jane");

interviewQuestions("teacher")("Mark");
interviewQuestions("developer")("Jonasz");
*/

//////////////////////////////////////

// Lecture: Bind, call and apply
/* 
var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        `Good ${timeOfDay} Ladies and Gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`
      );
    } else if (style === "friendly") {
      console.log(
        `Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`
      );
    }
  },
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer",
};

john.presentation("formal", "morning");
john.presentation.call(emily, "friendly", "afternoon");

john.presentation.apply(emily, ["friendly", "afternoon"]);
// Error in lecture. According to lecture this was supposed not to work 
// becouse this method expects 2 args not one arg that is a array

// create copy of a function with preset values:
  //  PS w ogóle funkcje z domyślnymi wartościami:
        // function say(message = "Hi") {
        //   console.log(message);
        // }
        // say(); // 'Hi'
        // say("Hello!"); // 'Hello!'
        
var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("morning");
johnFriendly("night");
var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("afternoon");

// real life example:
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages, fullJapan);
 */

//////////////////////////////////////
// CODING CHALLENGE
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. 
A question should include:
a) question itself
b) the answers from which the player can choose the correct one 
(choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, 
together with the possible answers (each question should have a number) 
(Hint: write a method for the Question objects for this task).
// // //   // why method not a function?


5. Use the 'prompt' function to ask the user for the correct answer. 
The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor 
(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. 
So make sure that all your code is private and doesn't interfere with the other programmers code 
(Hint: we learned a special technique to do exactly that).
*/
/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends
(Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. 
So include the option to quit the game if the user writes 'exit' instead of the answer. 
In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! 
So each time an answer is correct, add 1 point to the score 
(Hint: I'm going to use the power of closures for this, but you don't have to, 
just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/
/*
/////////////////////////////
// robiliśmy tak jakby anonimową i przypisytwaliśmy do var. To nic nie zmienia?

var questions = [];
// normalnie chgciałbym żeby array nazywał się questions,
// gdym po nim robił loopa to question of qusetions, prototyp to byłby Question,
// każdy instancje prototypu to question - nie akurat... + question itself jako zmienna // jak to zrobić?

var Question = function (phrase, answers, correctAnswer) {
  this.phrase = phrase;
  this.answers = answers; // Array
  this.correctAnswer = correctAnswer;
};
*/
/* 
(function () {
  function Question(actualQuestion, answers, correct) {
    this.actualQuestion = actualQuestion;
    this.answers = answers;
    this.correct = correct;
  }
  // po co zmienne a nie od razu do array.
  // // Możnaby zrobic metodę, że tworząc by sie uzuełniało
  var q1 = new Question(
    "Czy zrobiłeś to zadanie za 1. podejściem?",
    ["Yes", "No"],
    1
  );
  var q2 = new Question(
    "Jakiej płci jest prowadzący?",
    ["Kobietą", "Mężczyzną", "W 2020 roku takie pytanie???"],
    2
  );
  var q3 = new Question(
    "W którym roku robiłeś JW to zadanie po raz 1.?",
    [2010, 2012, 2014, 2016, 2018, 2020],
    5
  );

  var answers = [q1, q2, q3];

  Question.prototype.askQuestionLog = function () {
    // for (var i = 0; i < this.answers.length; i++) {
    //   console.log(`${i}: ${this.answers[i]}`);
    // }
    for (answer of this.answers) {
      console.log(`${this.answers.indexOf(answer)}: ${answer}`);
    }
  };

  // zasadniczo górę tez by tu można wrzucić a następnie użyć IIFE
  // ale póki co named

  // los liczbę
  var randNo = Math.floor(Math.random() * answers.length);

  var roundQuestion = answers[randNo];

  // użyj metody

  roundQuestion.askQuestionLog();

  // prompt
  var sign = prompt("Wpisz cyfrę odpowiedzi");

  //evaluate and log verdict :)
  console.log(sign == roundQuestion.correct ? "GOOD! :)" : "Try again :(");
  // didn't use method
})();
 */

// po co zmienne a nie od razu do array.
// // Możnaby zrobic metodę, że tworząc by sie uzuełniało
/* 
function createQuestions(actualQuestion, answers, correct) {
  return function Question() {
    this.actualQuestion = actualQuestion;
    this.answers = answers;
    this.correct = correct;
  };
}
var q1 = new Question(
  "Czy zrobiłeś to zadanie za 1. podejściem?",
  ["Yes", "No"],
  1
);
var q2 = new Question(
  "Jakiej płci jest prowadzący?",
  ["Kobietą", "Mężczyzną", "W 2020 roku takie pytanie???"],
  2
);
var q3 = new Question(
  "W którym roku robiłeś JW to zadanie po raz 1.?",
  [2010, 2012, 2014, 2016, 2018, 2020],
  5
);

var answers = [q1, q2, q3];

Question.prototype.askQuestionLog = function () {
  // for (var i = 0; i < this.answers.length; i++) {
  //   console.log(`${i}: ${this.answers[i]}`);
  // }
  for (answer of this.answers) {
    console.log(`${this.answers.indexOf(answer)}: ${answer}`);
  }
};
// console.log(q1);
// console.log(q2);
// console.log(q3);
// console.log(answers); */

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) 
(Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. 
The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor 
(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. 
So make sure that all your code is private and doesn't interfere with the other programmers code 
(Hint: we learned a special technique to do exactly that).

--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends 
(Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. 
So include the option to quit the game if the user writes 'exit' instead of the answer. 
In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score 
(Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function () {
  var questions = [];
  var Question = function (phrase, answers, correctAnswer) {
    // i there a difference between this and that Jonas did in solution:
    // Question = function Question(phrase, answers, correctAnswer) {
    this.phrase = phrase;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };

  Question.prototype.askQuestionLog = function () {
    // why method not a function though (here and in expert level 11?
    console.log(this.phrase);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(`  ${i}: ${this.answers[i]}`);
    }
  };
  // I thought: 'why create variables and then put them in an array when you can do that at once'?
  function createAndPush(actualQuestion, answers, correct) {
    questions.push(
      (function () {
        return new Question(actualQuestion, answers, correct);
      })()
    );
  }

  createAndPush(
    "Is JavaScript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );

  createAndPush(
    "What is the name of this course's teacher?",
    ["John", "Michael", "Jonas"],
    2
  );

  createAndPush(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tediuos"],
    2
  );

  var scores = {
    points: 0,
    all: 0,
  };
  function game() {
    // Create random number and choose question
    var randNo = Math.floor(Math.random() * questions.length);
    var roundQuestion = questions[randNo];

    // Log question and answers
    roundQuestion.askQuestionLog();

    // prompt
    var userAnswer = prompt("Enter answer (number)");

    scores.update = function () {
      // Evaluate and log verdict :) or exit
      if (userAnswer.toLowerCase().trim() !== "exit") {
        // Update game state and give feedback
        this.all++;
        var answer;
        var goodAnswer = roundQuestion.correctAnswer;
        if (userAnswer == goodAnswer) {
          this.points++;
          answer = "GOOD! :)";
        } else {
          answer = `Try again :( Correct answer was ${goodAnswer}.`;
        }
        console.log(`${answer} Your score is ${this.points} out of ${this.all}.
======================
       `);
        // New round
        game();
      } else {
        // (Game end) Goodbye message
        console.log("Bye! See you next time :)");
      }
    };
    // actually run the method (game)
    scores.update();
  }
  // start the game
  game();
})();

/* 
// punkt 11 jest dziwny więc sprawdziłem jak działa fr kodu:
function score() {
  var sc = 0;
  return function (correct) {
    if (correct) {
      sc++;
    }
    return sc;
  };
}

var keepScore = score();

console.log(keepScore()); // 0
console.log(keepScore); // [Function]
console.log(keepScore(true)); // (+1=)1
keepScore(true); // (+1=2)
console.log(keepScore(true)); // (+1=)3
keepScore(true); // (+1=4)
console.log(keepScore()); // (+0=)4
 */
