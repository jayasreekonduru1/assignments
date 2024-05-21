// var mobileNumber = "+91-9324234535";
// pattern= /^\+91-\d{10}$/;
// var result= mobileNumber.match(pattern);
// console.log(result)

// var ipAddress="222.222.123.111";
// pattern = /\d{3}.\d{3}.\d{3}.\d{3}$/;
// var result= ipAddress.match(pattern);
// console.log(result)

// var userName="Jayasreeds";
// pattern = /^[a-zA-Z]+$/
// var result=userName.match(pattern);
// console.log(result);

var userName="Jaya2d$";
// pattern=/^.*(?=.{5,8})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
pattern = /[a-zA-Z0-9_$@\-]{5,8}+/
var result=userName.match(pattern);
console.log(result);