const employees = [
    { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
    { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000 },
    { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000 }
];

function prepareHTMLItems(items) {
    return items
        .map((item) => `<p>${item.id}: ${item.name} - ${item.department} $${item.salary}</p>`)
        .join("");
}

function displayEmployees() {
    document.getElementById("employeesDetails").innerHTML = prepareHTMLItems(employees);
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, emp) => acc + emp.salary, 0);
    alert(`Total salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter((emp) => emp.department === "HR");
    document.getElementById("employeesDetails").innerHTML = prepareHTMLItems(hrEmployees);
}

function findEmployeeById(empId) {
    const foundEmp = employees.find(emp => emp.id === empId);
    if (foundEmp) {
        document.getElementById("employeesDetails").innerHTML = prepareHTMLItems([foundEmp]);
    } else {
        document.getElementById("employeesDetails").innerHTML = "no employee has been found with this id";
    }
}