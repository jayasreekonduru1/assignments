//fibanocci series
// function fibanocci(num){
//     a=0;
//     b=1;
//     for(i=1; i<=num;i++){
//         console.log(a);
//         c=a+b;
//         a=b;
//         b=c;
//     }
// }
// fibanocci(10)

//prime number for given number
// is_prime=true;
// function primeNumber(num){
//     for(i=2; i<num; i++){
//         if(num%i===0){
//             is_prime=false;
//             console.log("Not a prime number");
//             break;
//         }
//     }
//     if(is_prime){
//         console.log("Prime number");
//     }
// }
// primeNumber(12);

//factorial for given number

function factorial(num){
    fact=1;
    for(i=1; i<=num;i++){
        fact=fact*num;
        num=num-1;
    }
    console.log(fact);
}
factorial(5)
