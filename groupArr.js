
//group array of objects with property

function grpArray(employees){

    let result = {};
 
    for (const employee of employees){

        let department = employee.department;

        if(!result[department]){
            result[department] = [];
        }
        result[department].push(employee);
    }
 
   return result;
}
let employees = [
    { name: "John", department: "QA" },
    { name: "Mike", department: "Dev" },
    { name: "Sara", department: "QA" },
    { name: "Alex", department: "Dev" },
    { name: "Sam", department: "HR" }
];

console.log(grpArray(employees));