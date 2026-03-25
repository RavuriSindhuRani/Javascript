let employees = [ 
{ name: 'Alice', salary: 50000 }, 
{ name: 'Bob', salary: 60000 }, 
{ name: 'Charlie', salary: 40000 }, 
];

let amount = Number(prompt("Enter salary amount:"));

employees
  .filter(emp => emp.salary > amount)        
  .sort((a, b) => a.salary - b.salary);