var employee={
    Id:123,
    empName:"Jayasree",
    salary:25000,
    age:21
    
};
console.log(employee)

// 1. in an object user cannot able to edit or update the value of one key (id)
// Object.defineProperty(employee, "age",{
//     value:24,
//     writable: false,
// })
// employee.age=29;
// console.log(employee)


//2. in an object user cannot able to edit or update the values of all keys
// Object.freeze(employee)
// employee.empName = "sowji"
// employee.salary=12000;

// console.log(employee);

//3. in an object user cannot able to add new properties
employee.native="nellore"
console.log(employee)
Object.seal(employee)
employee.workLocation="Bangalore"
console.log(employee)