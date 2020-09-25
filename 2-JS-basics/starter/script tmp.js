john = {
  name: 'John',
  tall: true,
  height: 177,
  ciekaweCoZwroci: function() {
    return this;
  }
}

console.log(john.ciekaweCoZwroci());


/********************
* skrypt tmp
*/
/*
próba ogólnego rozwiązania). Tak w ogóle lepiej było by użyć tablicy dwuwymiarowej
var maxValue = 999999;

john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42], // var ??
    thresholdValues: [50, 200.001, maxValue], // the wording isn't clear what to do with bills $50 and $200 but it seems that both are in 2nd threshhold (15%) and since there are two places after coma i've decided to define the threshold values this way
    percentVal: [0.2, 0.15, 0.1],
    tips: [],
    billsWithTips: [],
    calcTips: function() {
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            if (bills[i] < /// to co poniżej jeżeli tak to kontynuuj, przypisz ni kontynuuj, jak nie to przerwij jak przerwie to na czym stanie?)
            for (var iThrshVal = 0; iThrshVal < this.thresholdValues; iThrshVal++) {
                if (bills[i] < thresholdValues[iThrshVal]);
                percentage = this.percentVal[iThrshVal];
            }
            // while // pamiętakjj o break / return ???
            //if (this.bills[i] < 50) {} else if (this.bills[i] <= 200) {} else percentage = .1;
            this.tips.push(Math.round(this.bills[i] * percentage * 100) / 100);
            this.billsWithTips.push(this.bills[i] + this.tips[i]);
        }
    }
}

john.calcTips();
console.log(john);
*/
/********************
* wysłałem KUbie
*/
/*
próba ogólnego rozwiązania). Tak w ogóle lepiej było by użyć tablicy dwuwymiarowej
var maxValue = 999999;

john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42], // var ??
    thresholdValues: [50, 200.001, maxValue], // the wording isn't clear what to do with bills $50 and $200 but it seems that both are in 2nd threshhold (15%) and since there are two places after coma i've decided to define the threshold values this way
    percentVal: [0.2, 0.15, 0.1],
    tips: [],
    billsWithTips: [],
    calcTips: function() {
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            if (bills[i] < /// to co poniżej jeżeli tak to kontynuuj, przypisz ni kontynuuj, jak nie to przerwij jak przerwie to na czym stanie?)
            for (var iThrshVal = 0; iThrshVal < this.thresholdValues; iThrshVal++) {
                if (bills[i] < thresholdValues[iThrshVal]);
                percentage = this.percentVal[iThrshVal];
            }
            // while // pamiętakjj o break / return ???
            //if (this.bills[i] < 50) {} else if (this.bills[i] <= 200) {} else percentage = .1;
            this.tips.push(Math.round(this.bills[i] * percentage * 100) / 100);
            this.billsWithTips.push(this.bills[i] + this.tips[i]);
        }
    }
}

john.calcTips();
console.log(john);
*/
/********************
* od KUby 1
*/
/*
var maxValue = 999999;

function thresholdFun(value, percent) {
  return {
    value: value,
    percent: percent
  }
}

// thresholds = [[400, 0.23], [200, 0.5]]
function person(name, bills, thresholds) {
  var newThresholds = thresholds.map((e) => {
    // e = [400, 0.23]
    var obj = thresholdFun(e[0], e[1])
    return obj
  })
  // [{value: 400, percent: 0.23}, ....]

  return {
    name: name,
    bills: bills,
    thresholds: newThresholds,
    calcTips: function() {
      for (var i = 0; i < this.bills.length; i++) {
          var percentage;
          var bill = this.bills[i]
          // if (bills[i] < /// to co poniżej jeżeli tak to kontynuuj, przypisz ni kontynuuj, jak nie to przerwij jak przerwie to na czym stanie?)
          for (var iThrshVal = 0; iThrshVal < this.thresholds.length; iThrshVal++) {
            if (bill < this.thresholds[iThrshVal].value) {
              return percentage = this.thresholds[iThrshVal].percent;
            }

          }
          // while // pamiętakjj o break / return ???
          //if (this.bills[i] < 50) {} else if (this.bills[i] <= 200) {} else percentage = .1;
          this.tips.push(Math.round(bill * percentage * 100) / 100);
          this.billsWithTips.push(bill + this.tips[i]);
      }
    }
  }
}

person('Jonasz', [12312,123,333,34,5555], [[400, 0.23], [200, 0.5]])
*/
/********************
* od KUby 2
*/
/*
// =============


[1,2,3].map((e) => e * 4)
(3) [4, 8, 12]
[1,2,3].map((e, i) => i)
(3) [0, 1, 2]
a = [100, 200, 300]
(3) [100, 200, 300]
[1,2,3].map((e, i) => e + a[i])
(3) [101, 202, 303]
a
(3) [100, 200, 300]
a[-1]
undefined
a[-1]
undefined
a[1]
200

// ##############
*/