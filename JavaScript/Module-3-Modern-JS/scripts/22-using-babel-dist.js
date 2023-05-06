"use strict";

var simple_average = function simple_average() {
  for (var _len = arguments.length, number = new Array(_len), _key = 0; _key < _len; _key++) {
    number[_key] = arguments[_key];
  }
  var sum = number.reduce(function (accumulate, num) {
    return accumulate + num;
  }, 0);
  return sum / number.length;
};
var weighted_average = function weighted_average() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accumulate, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accumulate + number * weight;
  }, 0);
  var weight_sum = entries.reduce(function (accumulate, _ref2) {
    var weight = _ref2.weight;
    return accumulate + weight;
  }, 0);
  return sum / weight_sum;
};
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var ordered_numbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(ordered_numbers.length / 2);
  if (ordered_numbers.length % 2 == 1) {
    return ordered_numbers[middle];
  }
  var first_element = ordered_numbers[middle - 1];
  var second_element = ordered_numbers[middle];
  return simple_average(first_element, second_element);
};
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num == n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Simple Arithmetic Average: ".concat(simple_average(1, 2, 3, 4, 5)));
console.log("Weighted Arithmetic Average: ".concat(weighted_average({
  number: 7,
  weight: 2
}, {
  number: 9,
  weight: 5
}, {
  number: 3,
  weight: 1
})));
console.log("Median: ".concat(median(15, 14, 8, 7, 3)));
console.log("Mode: ".concat(mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
