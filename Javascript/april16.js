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
// primeNumber(7);

//factorial for given number

// function factorial(num){
//     fact=1;
//     for(i=1; i<=num;i++){
//         fact=fact*i;
//     }
//     console.log(fact);
// }
// factorial(5)

//string palindrome
// function strPalindrome(str){
//     var length=str.length;
//     var result="";
//     for(i=length;i>=1;i--){
//     rev=str[length-1];
//     length=length-1;
//     result=result+rev
//     }
// if(str == result){
//     console.log("palindrome");
// }
// else{
//     console.log("Not a palindrome");
// }
// }
// strPalindrome("malayalam")

//Number palindrome
// function isPalindrome(number) {
//     let reversed = 0;
//     let original = number;

//     while (original > 0) {
//         reversed = reversed * 10 + original % 10;
//         original = Math.floor(original / 10);
//     }

//     if (number === reversed){
//         console.log("Number is palindrome");
//     }
//     else{
//         console.log("Number is not palindrome");
//     }
// }

// isPalindrome(121); 
// isPalindrome(12345); 

//Square and square root for a given number

// function square(num){
//     result=num*num;
//     console.log(result);
// }
// square(3)

function squareRoot(num){
    var sqrt=num/2;
    var temp=0;
    while(sqrt != temp){
        temp=sqrt;
        sqrt=(num/temp+ temp)/2
    }
    console.log(sqrt)
}
squareRoot(64)
