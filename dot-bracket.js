// dot . notation
const employee = {
    name: 'Salaat',
    1: 'desk one',
    'home-address': '123 Main st',
    // home-address: '123 Main st', // property name a -, space, special character thakle without quation likha jabe na, vul hobe tokhon quation a likhte hobe
    position: 'Software Engineer'
}
console.log(employee.name)  // dot notation bola hoi ai take
console.log(employee.position) // ai vabe . diye object ar value access kora k dot . notation bole.
// console.log(employee.1)  // ai ta number tai access kora jabe na . notation diye. ai line ta vul

//Bracket Notation []
console.log(employee['name']);
console.log(employee['home-address'])
console.log(employee[1])

