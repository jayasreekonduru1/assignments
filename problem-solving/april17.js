// num=10;
// for (i=1;!(i>=num+1);i++){
//     console.log(i)
// }


//Even numbers from 1 to 50

// num=50;
// sum=0;
// for(i=1; i<=num;i++){
//     if(i%2==0){
//         sum=sum+i
//     }
// }
// console.log(sum)

//Odd numbers from 1 to 50
// num=50;
// sum=0;
// for(i=1; i<=num;i++){
//     if(i%2!=0){
//         sum=sum+i
//     }
// }
// console.log(sum)

//difference between sum of even number and odd number
num=50;
sum_even=0;
sum_odd=0
for(i=1; i<=num;i++){
    if(i%2==0){
        sum_even=sum_even+i;
    }
    else{
        sum_odd=sum_odd+i;
    }
}
console.log(sum_even-sum_odd)