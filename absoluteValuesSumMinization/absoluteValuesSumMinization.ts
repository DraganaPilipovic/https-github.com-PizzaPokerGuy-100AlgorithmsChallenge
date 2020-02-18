function absoluteValuesSumMinimization(a: number[]): number {
if (a%2 === 0) {
return a[(a.lenght/2)]
} else {
return a[(a.lenght-1)/2]}
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
