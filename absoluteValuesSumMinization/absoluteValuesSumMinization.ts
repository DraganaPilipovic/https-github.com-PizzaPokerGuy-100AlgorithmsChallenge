function absoluteValuesSumMinimization(a) {

if (a.length%2 === 0) {
  return a[a.length/2-1];
} else {
  return a[Math.floor(a.length/2)];
}
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
