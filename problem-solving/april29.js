// 1) if 0's are more than 1's in a number then return 1 otherwise return 0
// [101,200,10211]
// ouput: 101

// arr=[101,200,10211]
// result=""
// for(i of arr){
//     num=String(i)
//     ones_count=0;
//     zeros_count=0;
//     for(j of num){
//         if(j==1){
//             ones_count=ones_count+1;
//         }
//         if(j==0){
//             zeros_count=zeros_count+1;
//         }
//     }
//     if(ones_count>zeros_count){
//         result=result+1;
//     }
//     else{
//         result=result+0
//     }
// }
// console.log(result)

// 2) input: [[2,4,5],[12,4,5],[1,0],[7,4,3,3]]
// output: 5413

// arr=[[2,4,5],[12,4,5],[1,0],[7,4,3,3]]
// s=""
// for (i in arr){
//     if (i%2 == 0){
//         max=arr[i][0]
//         for(j of arr[i]){
//             if(j>max){
//                 max=j
//             }
//         }
//         s=s+max
//     }
//     else{
//         min=arr[i][0]
//         for(j of arr[i]){
//             if(j<min){
//                 min=j
//             }
//         }
//         s=s+min
//     }
// }
// console.log(s)



// 3) input: [101, 11, 130,1901]
// output: 111

// arr=[101,11,130,1901]
// s=""
// for(i of arr){
//     ones_count=0,zeros_count=0;
//     num=String(i)
//     for(j of num){
//         if(j==1){
//             ones_count++
//         }
//         if(j==0){
//             zeros_count++
//         }
//     }
//     if(ones_count != zeros_count){
//         s=s+1
//     }
// }
// console.log(s)



// 4) input: [23, 45, 65,12]
// output: False (array is not in sorted order)
// input: [34,12,11, -9]
// output: True ( array is in sorted order)

// arr=[34,12,11,-9]
// order=arr[1]-arr[0]
// count=0
// if(order>1){
//     for(i=0;i<arr.length;i++){
//         if(arr[i+1]>arr[i]){
//             count++
//         }
//     }
//     console.log(count==arr.length-1)
//     if(count==arr.length-1){
//         console.log("sorted")
//     }
//     else{
//         console.log("unsorted");
//     }
// }
// else{
//     for(i=0;i<arr.length;i++){
//         if(arr[i+1]<arr[i]){
//             count++
//         }
//     }
//     console.log(count==arr.length-1)
//     if(count==arr.length-1){
//         console.log("sorted")
//     }
//     else{
//         console.log("unsorted");
//     }
// }