let sumLargestNumbers = function(data) {
  data = data.sort(function(a, b){return a - b});
  data = data[data.length - 1] + data[data.length - 2];
  return data;
};

console.log(sumLargestNumbers([1, 10]), "=?", "11");
console.log(sumLargestNumbers([1, 2, 3]), "=?", "5");
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]), "=?", "126");