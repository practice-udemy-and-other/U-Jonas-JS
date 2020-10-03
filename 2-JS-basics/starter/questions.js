// jak zrobić klasę żeby generowało metodę takie jak tiping rules na podtawie //  w 'kslasie' miejsce na zmienne; w metodzie zrobic loopa typu:
var tippingRules = [
  [50, 0.3, true],
  [100, 0.25, false],
  [150, 0.15],
];
var b, t, d1, d2;
function percent(
  bill,
  arrOfTippingRules,
  defaultVal = 0.2,
  defaultRule = true
) {
  for (var i = 0; i < arrOfTippingRules.length; i++) {
    var arr = arrOfTippingRules[i];
    if (bill < arr[0]) {
      return arr[1];
    } else if (arr.length === 2) {
      if (arr[2] && bill === arr[0]) {
        return arr[1];
      }
    } else {
      if (defaultRule && bill === arr[0]) {
        return arr[1];
      }
    }
  }
  return defaultVal;
}

// nie wiem czy to działa ale mniej więcej coś takiego można by uzyć w metodzie
// zeby sprawdzić trzeba by zmieniac poniższe wartośi i sparwdzać czy mi wyjdzie
t = [
  [50, 0.3, true],
  [100, 0.25, false],
  [150, 0.15],
];
d1 = 0.1;
d2 = true;

b = 49;
/* t = [
  [50, 0.3, true],
  [100, 0.25, false],
  [150, 0.15],
];
d1 = 0.1;
d2 = true; */
var p = percent(b, t, d1, d2);
console.log("p: ", p, "b: ", b, "t: ", t, "d1: ", d1, "d2: ", d2);
//
b = 50;
/* t = [
  [50, 0.3, true],
  [100, 0.25, false],
  [150, 0.15],
];
d1 = 0.1;
d2 = true; */
var p = percent(b, t, d1, d2);
console.log("p: ", p, "b: ", b, "t: ", t, "d1: ", d1, "d2: ", d2);
//
b = 51;
/* t = [
  [50, 0.3, true],
  [100, 0.25, false],
  [150, 0.15],
];
d1 = 0.1;
d2 = true; */
var p = percent(b, t, d1, d2);
console.log("p: ", p, "b: ", b, "t: ", t, "d1: ", d1, "d2: ", d2); //
b = 99;
/* t = [
  [50, 0.3, true],
  [100, 0.25, false],
  [150, 0.15],
];
d1 = 0.1;
d2 = true; */
var p = percent(b, t, d1, d2);
console.log("p: ", p, "b: ", b, "t: ", t, "d1: ", d1, "d2: ", d2); //
b = 100;
/* t = [
  [50, 0.3, true],
  [100, 0.25, false],
  [150, 0.15],
];
d1 = 0.1;
d2 = true; */
var p = percent(b, t, d1, d2);
console.log("p: ", p, "b: ", b, "t: ", t, "d1: ", d1, "d2: ", d2); //
b = 101;
/* t = [
  [50, 0.3, true],
  [100, 0.25, false],
  [150, 0.15],
];
d1 = 0.1;
d2 = true; */
var p = percent(b, t, d1, d2);
console.log("p: ", p, "b: ", b, "t: ", t, "d1: ", d1, "d2: ", d2); //
b = 149;
/* t = [
  [50, 0.3, true],
  [100, 0.25, false],
  [150, 0.15],
];
d1 = 0.1;
d2 = true; */
var p = percent(b, t, d1, d2);
console.log("p: ", p, "b: ", b, "t: ", t, "d1: ", d1, "d2: ", d2); //
b = 150;
/* t = [
  [50, 0.3, true],
  [100, 0.25, false],
  [150, 0.15],
];
d1 = 0.1;
d2 = true; */
var p = percent(b, t, d1, d2);
console.log("p: ", p, "b: ", b, "t: ", t, "d1: ", d1, "d2: ", d2); //
b = 151;
/* t = [
  [50, 0.3, true],
  [100, 0.25, false],
  [150, 0.15],
];
d1 = 0.1;
d2 = true; */
var p = percent(b, t, d1, d2);
console.log("p: ", p, "b: ", b, "t: ", t, "d1: ", d1, "d2: ", d2);
console.log(`function percent(bill, arrOfTippingRules, defaultVal = 0.2, defaultRule = true) {
  for (var i = 0; i < arrOfTippingRules.length; i++) {
    var arr = arrOfTippingRules[i];
    // jeżlei mniejszy
    if (bill < arr[0]) {return arr[1]}
    // jeżeli równy
    else if (arr.length === 2) {
      // jeżlei jest reguła dla zakresu
      if (arr[2] && bill === arr[0]) {return arr[1]}
      // ogólna reguła
    } else {
      if (defaultRule && bill === arr[0]) {return arr[1]}
    }
  }
  // jak żaden z zakesów nie zadziała z jakiegoś powodu (np brak zakresów)
  return defaultVal;
};`);

//

// 1. wartośc domuślna np. 10% i opcjanlne: czy domyślne LUB RÓWNE?, jeżeli nie zaznaczono to tak
// array 2 wymarowy: [[kwota(np. 50$), procent(np. 0.3), opcjonalne-czy mniejsze LUB RÓWNE, ], [],...]
// właściwie to co opisałem to juz jest metoda

// ES6

/*
var john = {
    tippingRules: [[0.1, true], [[50, 0.3, true], [100, 0.25, false], [150, 0.2]]],
    
    //
    tippingRules: [[0.1 - default value, true - czy domyślnie domknięte zakresy?], opcjonalne: [[50- kwota, 0.3 - procent, true - opcjonalne], [100, 0.25, false], [150, 0,2]]]
    jeżlei MNIEJ LUB RÓWNE niż $50 - 0.3 ([50, 0.3, true]) jeżeli nie to
    jeżeli MNIEJ niż 100 to 0.25 [100, 0.25, false]
    jeżeli MNIEJ LUB RÓWNE ([[0.1, TRUE]) niż 150 to 0.2 ([150, 0.2])
    jeżeli więcej niż 150 ([150, 0.2]) to 0.1 ([[0.1, TRUE])
    //

    name: 'John',
    tall: true,
    height: 190,
    howToTip: function(bill) {
        var tippingRules = this.tippingRules;
        var defaultPerentage = tippingRules[0][0];
        var defaultClosedRange = tippingRules[0][1];
        var percentage = defaultPerentage;
        if 

    }
}
*/

//use switch case!!!!!!!
// zamiast zwykłego loopa spróbować uzyć też innego np. for each
// spr jak się robi klasy i wygenerować oba obiekty (wraz z metodami oczywiście) tylko jak metody skoro sa inne troszkę dla obu obiektów???
// co to js transpiling polyfillling
