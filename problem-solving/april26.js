// 1) Write a program to find duplicate and unique numbers in the array without using methods.

// const numbers = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1];

// const uniqueNumbers = [];
// const duplicateNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     let isDuplicate = false;
//     for (let j = 0; j < uniqueNumbers.length; j++) {
//         if (numbers[i] === uniqueNumbers[j]) {
//             duplicateNumbers.push(numbers[i]);
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         uniqueNumbers.push(numbers[i]);
//     }
// }

// console.log("Unique numbers:", uniqueNumbers);
// console.log("Duplicate numbers:", duplicateNumbers);



//2) Write a program that takes an array of number, return true if array contains only unique numbers otherwise return false.
// input: [2,7,6,5]
// output: True

// input: [12,45,12,23,12]
// output: False
// arr=[12,45,12,23,12]
// empty="";
// for(i of arr){
//     if(!empty.includes(i)){
//         empty=empty+i
//     } 
// }
// if(empty.length==arr.length){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// 3) Write a program to print the sum of numbers in the array that contains duplicate numbers.
// input: [ 22, 121, 67, 345]
// output: 22+121 (sum)
// arr=[22,121,67,345,11]
// empty="";
// sum=0
// for(i of arr){
//    count=0 
//     num=String(i)
//     for(j of num){
//         if(!empty.includes(j)){
//             empty=empty+j
//         }
       
//         else{
//             count=count+1
//         }
//     }
//     if(count>=1){
//         sum=sum+Number(i);
//     }
// }
// console.log(sum)