//Write a program to delete all occurrence of element in given array [23,56,4,78,5,63,45,210,56];

let elements = [23,56,4,78,5,63,45,210,56];
console.log("before splice array :" + elements);
for (let i = 0; i < elements.length; i++) {
  
    elements.splice(i, elements.length);
}
console.log("after splice array :" + elements);

//output : 

// "before splice array : 23,56,4,78,5,63,45,210,56"
// "after splice array :"