class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}

const emp_anil = new Employee(22,"Anil","IT",5000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(22,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

var array=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny, emp_mahi];

console.warn("==== Display the employee name who is working in TCS ====");
for (const employee of array) {
    if(employee.emp_company==="TCS"){
        console.log(`Employee name :${employee.emp_name}, company Name: ${employee.emp_company}`);
    }
}

console.warn("=== Display the employee who work in Finance department ===");
for (const employee of array) {
    if(employee.emp_dept==="Finance"){
        console.log(`Employee Name:${employee.emp_name} Department Name ${employee.emp_dept}`);
    }
}

console.warn("=== Display the employee details who name start with 'R' === ");
for (const employee of array) {
    if(employee.emp_name.startsWith("R")){
        console.log(`Employee ID:${employee.emp_id}, Employee Name: ${employee.emp_name}`);
    }
    
}

console.warn("=== Display the employee who's sal > 70000 ===");
for (const employee of array) {
    if(employee.emp_salary>70000){
        console.log(`Employee Name :${employee.emp_name}, Company Name :${employee.emp_company} and Employee Salary:${employee.emp_salary}`);
    }
}

console.warn("=== Display who's salary greater then equal to '50000' & from 'IT' Department=== ");
for (const employee of array) {
    if(employee.emp_salary>=50000 && employee.emp_dept==="IT"){
        console.log(`Employee Id:${employee.emp_id}, Employee Name:${employee.emp_name}, Employee Department:${employee.emp_dept}, Employee Salary:${employee.emp_salary} and Employee Company:${employee.emp_company}`);
    }
}

console.warn("=== Display Employee name who work in 'Infy' company === ");
for (const employee of array) {
    if(employee.emp_company==="Infy"){
        console.log(`Employee Id:${employee.emp_id}, Employee Name:${employee.emp_name}, Employee Department:${employee.emp_dept}, Employee Salary:${employee.emp_salary} and Employee Company:${employee.emp_company}`);
    }

}
