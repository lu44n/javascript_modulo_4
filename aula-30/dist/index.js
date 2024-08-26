"use strict";

var mediaSimples = function mediaSimples() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce(function (acc, number) {
      return acc + number;
    }, 0) / numbers.length;
  }
};
console.log("C\xE1lculo de M\xE9dia Simples para os seguintes valores:\n    1, 2, 3, 4, 5: ".concat(mediaSimples(1, 2, 3, 4, 5)));
var mediaPonderada = function mediaPonderada() {
  var sumCalculate = 0;
  var weightCalculate = 0;
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  if (entries.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < entries.length; i++) {
      sumCalculate += entries[i].n * entries[i].p;
      weightCalculate += entries[i].p;
    }
    return sumCalculate / weightCalculate;
  }
};
console.log("C\xE1lculo de M\xE9dia Ponderada para os seguintes valores:\n    {n: 7, p: 2},\n    {n: 9, p: 5},\n    {n: 3, p: 1}: ".concat(mediaPonderada({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
})));
var mediana = function mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  if (numbers.length % 2 === 0) {
    return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
  } else {
    return numbers[Math.floor(numbers.length / 2)];
  }
};
console.log("C\xE1lculo de Mediana para os seguintes valores:\n    2, 4, 5, 7, 42, 99: ".concat(mediana(2, 4, 5, 7, 42, 99)));
var moda = function moda() {
  var frequency = {};
  var maxFreq = 0;
  var mostFrequent;
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  for (var _i = 0, _numbers = numbers; _i < _numbers.length; _i++) {
    var item = _numbers[_i];
    frequency[item] = (frequency[item] || 0) + 1;
    if (frequency[item] > maxFreq) {
      maxFreq = frequency[item];
      mostFrequent = item;
    }
  }
  return mostFrequent;
};
console.log("C\xE1lculo de Moda para os seguintes valores:\n    1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4: ".concat(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));