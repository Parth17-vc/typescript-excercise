// Write a typescript program to find the largest number in an array

function largest(arr) {  

    let max = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i]; 
    } 
    return max; 
} 

let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
console.log(largest(arr));


//output : 567