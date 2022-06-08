// Write a JS program to print a pattern using for loop

let str = "";
// External loop
for (let i = 1; i <= 8; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  str += "\n";
}
console.log(str);

// output
/* 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
*/

// reverser direction pattern


let str = "";
// External loop
for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8 - i + 1; j++) {
    str += j;
  }
  str += "\n";
}
console.log(str);

//output
/*

12345678
1234567
123456
12345
1234
123
12
1

*/