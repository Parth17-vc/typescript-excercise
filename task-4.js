//Write a program to delete all occurrence of element in given array [23,56,4,78,5,63,45,210,56];

let arr = [23,56,4,78,5,63,45,210,56];
let removed = arr.splice(0);
console.log("element deleted : " + removed);
console.log("Remaining elements in array : " + arr);

//output : 
// "element deleted : 23,56,4,78,5,63,45,210,56"
// "Remaining elements in array : "