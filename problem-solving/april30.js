// arr=[[4,2,7,1],[20,70,40,90],[1,2,0]]
// empty=[];
// for(i in arr){
//     max=arr[i][0]
//     for(j of arr[i]){
//         if(j>max){
//             max=j
//         }
//     }
//     empty.push(max)
// }
// console.log(empty)

// 21. Program to find greatest of three numbers(using ternery operator).

// 			Input:  4 8 2
// 			Output: 8 is gretest

// arr=prompt("Enter numbers: ").split(" ");
// num=[];
// for(i of arr){
//     num.push(Number(i))
    
// }
// largest=(num[0]>num[1]&&num[0]>num[2])?num[0]:(num[1]>num[2])?num[i]:num[2]
// console.log(largest)

// Create a function that takes an array of numbers and returns the second largest number.
// Example:
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// arr=[10,40,30,20,50]
// temp=0
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//        if(arr[j]>arr[j+1]){
//         temp=arr[j]
//         arr[j]=arr[j+1]
//         arr[j+1]=temp
//         }
//     }
// }
// length=arr.length
// console.log(arr[length-2])






// 22 . C Program to find factorial of number.
// Input: n=5
// Output: 120
// Explanation: 5 x 4 x 3 x 2 x 1 = 120
// const number=prompt("Enter a number: ");
// fact=1;
// for(i=1; i<=number;i++){
//     fact=fact*i
// }
// console.log(fact)