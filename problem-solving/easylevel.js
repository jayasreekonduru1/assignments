// 1. Create a function that takes two numbers as arguments and returns their sum.
// function sumOfTwoNumbers(a,b){
//     var sum=a+b;
//     return sum;
// }
// console.log(sumOfTwoNumbers(5,3))


// 2. Write a function that takes an integer minutes and converts it to seconds.

// function minutesToSeconds(minutes){
//     var seconds=minutes*60;
//     return seconds;
// }
// console.log(minutesToSeconds(2))


// 3. Create a function that takes a number as an argument, increments the number by +1 and returns the result

// function increment(a){
//     a++
//     return a;
// }
// console.log(increment(2))


// 4. Create a function that takes the age in years and returns the age in days.

// function ageToDays(years){
//     days=years*365
//     return days;
// }
// console.log(ageToDays(2))


// 5. Create a function that takes voltage and current and returns the calculated power.

// function calculatePower(voltage, current){
//     power=voltage*current
//     return power;
// }
// console.log(calculatePower(20,4))

// 6. Write a function that returns the string "something" joined with a space " " and the given argument a.

// function  stringName(a){
//     result=a.split('').join(" ")
//     return result
// }
// console.log(stringName("something"))


// 7. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// function checkValue(a,b){
//     sum=a+b;
//     if((a === 10) || (sum === 10)){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(checkValue(10,4))

// 8. Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// function checkStringLength(a,b){
//     if(a.length == b.length){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(checkStringLength("jayasree", "sowji"))


// 9. Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
	
// const greet=(a)=>{
//     return `${a}, Good Morning!`
// }
// console.log(greet("Hi"))

// 10. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
// function mobileNumber(a){
//     arr=a.split('')
//     arr.splice(3, 0, "-");
//     arr.splice(7, 0, "-");
//     result=arr.join("")
//     return result
// }
// console.log(mobileNumber("5555555555"))

// 11. Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// function sort(arr){
//     for(i=0;i<arr.length-1;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[j].length<arr[i].length){
//                 temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     return arr
// }

// console.log(sort(["a", "ccc", "dddd", "bb"]))


// 12. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
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


// 13. Create a function that takes an array of numbers and returns the second largest number.
// Example:
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// arr=[10,40,30,20,50,60]
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

// 14. Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Example:

// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// function removeDups(arr){
//     empty=[]
//     for(i=0;i<arr.length;i++){
//         is_dup=false
//         for(j=0;j<empty.length;j++){
//             if(arr[i]===empty[j]){
//                 is_dup=true;
//                 break
//             }
//         }
//         if(!is_dup){
//             empty.push(arr[i])
//         }
//     }
//     return empty
// }
// console.log(removeDups([1,0,1,0]))
// console.log(removeDups(["The", "big", "cat"]))


// 15. Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.
// Example:
// findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3
// function uniqNum(arr){
//     empty=[]
//     for(i of arr){
//         if(!empty.includes(i)){
//             empty.push(i)
//         }
//     }
//     // console.log(empty)
//     for(i of empty){
//         count=0
//         for (j of arr){
//             if(i == j){
//                 count++
//             }
//         }
//         if(count == 1){
//             return i
//         }
//     }
// }
// console.log(uniqNum([2,2,2,3,4,4,4]))


// 16.Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Example:

// charCount("c", "Chamber of secrets") ➞ 1

// function charCount(letter,word){
//     count=0
//       for(i of word){
//         if(i === letter){
//             count++
//         }
//     }
//     return count
// }

// console.log(charCount("c","Chamber of secrets"))

// 17. Create a function that takes a string and returns the number (count) of vowels contained within it.
// Example:

// countVowels("Celebration") ➞ 5

// function countVowels(string){
//     vowels=["a","e","i","o","u"]
//     count=0;
//     for(i=0;i<vowels.length;i++){
//         for(j=0;j<string.length;j++){
//             if(vowels[i] === string[j]){
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(countVowels('Celebration'))


// 18. Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// Example:
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
// function reverseCase(string){
//     result=""
//     for(i of string){
//         if(i === i.toUpperCase()){
//             result=result+i.toLowerCase()
//         }
//         else{
//             result=result+i.toUpperCase()
//         }
//     }
//     return result
// }
// console.log(reverseCase("Happy Birthday"))


// 19.  Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
			
// 			Input:      n=5
// 			Output:   2 4 6 8 10

// 			Explanation:  Loop start with 1 go till 5 bcoz n=5
// 					1 x 2 =2, 2 x 2=4, 3 x 2=6 …..etc
// n=5;
// result=""
// for(i=1;i<=n;i++){
//     result=result+" "+2*i
// }
// console.log(result)


// 20. Create Function that will take one parameter and return type of the data.
			
// 			Input:       500
// 			Output:     Integer

// 			Input:       Coding
// 			Output:    String

// function findDatatype(a){
//     return typeof a
// }
// console.log(findDatatype("coding"))
// console.log(findDatatype(500))


// 21. Program to find greatest of three numbers(using ternery operator).

// Input:  4 8 2
// Output: 8 is gretest

// arr=prompt("Enter numbers ").split(" ");
// num=[]
// for(i of arr){
// num.push(Number(i))
// }
// largest=(num[0]>num[1]&&num[0]>num[2]? num[0] : (num[1]>num[2] ? num[1]: num[2]))
// console.log(largest)


// 22 . C Program to find factorial of number.
		
// Input: n=5
// Output: 120

// Explanation: 5 x 4 x 3 x 2 x 1 = 120

// const number=prompt("Enter a number: ");
// fact=1;
// for(i=1; i<=number;i++){
// fact=fact*i
// }
// console.log(fact)

// 23. C Program to arrange numbers in ascending order
// 		Input: [2,3,1,5,4]
// 		Output: [1,2,3,4,5]

// Sort the Array using loop only(you can not use predefined function).
// arr=[2,3,1,5,4]
// temp=0;
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[j] < arr[i]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr)


// 24. Print Patter using loop.

// 			1
// 			1 2
// 			1 2 3
// 			1 2 3 4
//   			1 2 3 4 5
// num=5;
// string=""
// for(i=1;i<=num;i++){
//     for(j=1; j<= I;j++){
//         string=string+j
//     }
//     string=string+'\n'
// }
// console.log(string)


// 25. C Program to Calculate the Power of a Number(using loop only).

// Input: n=5, p=3
// Output: 5 ^ 3 = 125
// Explanation: 5 x 5 x 5 = 125
// num=prompt("Enter a number: ");
// power=prompt("Enter power: ");
// sum=1;
// for(i=0;i<power;i++){
// sum=sum*num
// }
// console.log(sum)


// 26. Program to Check Whether a Number is Prime or Not

// 			Input: 9
// 			Output: 9 is not a prime no

// 			Input: 7
// 			Output : 7 is a prime no


// num=prompt("Enter a number: ");
// is_prime=true;
// if (num>1){
//     for (i=2;i<num;i++){
//         if(num%i == 0){
//             is_prime=false;
//             console.log(`${num} is not a prime no`)
//             break;
//         }
//     }
//     if(is_prime){
//         console.log(`${num} is a prime no`)
//     }
// }
// else{
//     console.log("Enter a proper number")
// }


// 27. Program to find LCM of two numbers using while loop
// 		Input: 15 50
// 		Output: Lcm of 15 and 50 is 150.
// const num1 = prompt('Enter a first positive integer: ');
// const num2 = prompt('Enter a second positive integer: ');

// let min = (num1 > num2) ? num1 : num2;
// while (true) {
//     if (min % num1 == 0 && min % num2 == 0) {
//         console.log(`The LCM of ${num1} and ${num2} is ${min}`);
//         break;
//     }
//     min++;
// }


// 28. Program to Display Characters from A to Z Using Loop with count.
// Output: A1 B2 C3 D4 E5 F6 ……. Z26

// let count=1
// string=""
// for(i=65; i<=90; i++){
// string=string+" "+String.fromCharCode(i)+count++
// }
// console.log(string)



// 29. Program to find a missing number

// 			Input:  n=5(length of array), arr= [5,3,1,4]
// 			Output: 2 is missing

// 		Using loop only(you can not use predefined function)
// let arr=[5,3,1,4]
// temp=0
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[i]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)
// for(i=arr[0];i<=arr[arr.length-1];i++){
//     c=0;
//     for(j of arr){
//         if(i==j){
//             c++
//         }
//     }
//     if(c==0){
//         console.log("Missing Number: ", i)
//         break;
//     }
// }


// 30. Program to count vowels and consonants in a given String.

// 			Input: i am ram
// 			Output: 3 vowels 3 consonants.

// function countVowels(string){
//     vowels=["a","e","i","o","u"]
//     v_count=0;
//     for(i=0;i<vowels.length;i++){
//         for(j=0;j<string.length;j++){
//             if(vowels[i] === string[j]){
//                 v_count++
//             }
//         }
//     }
//     stringLength=string.split(" ").join("").length
//     c_count=stringLength-v_count
//     return `${v_count} vowels and ${c_count} consonants`
// }
// console.log(countVowels('i am ram'))


// 31. program to insert  the elements of an array for specific index.

// 			Input: [1,2,3,4,5,7,8,9,10] , index=5
// 			Output: [1,2,3,4,5,6,78,9,10]

// function insertAtIndex(array, index, element) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         if (i === index) {
//             result.push(element);
//         }
//         result.push(array[i]);
//     }
//     if (index >= array.length) {
//         result.push(element);
//     }
    
//     return result;
// }

// var inputArray = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// var indexToInsert = 5;
// var elementToInsert = 6;
// var resultArray = insertAtIndex(inputArray, indexToInsert, elementToInsert);

// console.log("Input Array:", inputArray);
// console.log("Output Array:", resultArray);


// 32. Reverse a number using while Loop

// 			Input: 123
// 			Output: 321

// num=prompt("enter a number: ")
// length=num.length;
// res="";
// i=length;
// while(i>0){
//     res=res+num[i-1];
//     i--;
// }
// console.log(res)


// 33. Count occurrence of number:

// 		Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// 		Output: 7 present 2 times.
// arr=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10]
// num=7;
// count=0;
// for(i of arr){
//     if(i== num){
//         count++
//     }
// }
// console.log(`${num} present ${count} times`)


