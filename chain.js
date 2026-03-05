const student = {
    name: 'Salaat',
    dept: 'CSE',
    mother: {
        name: 'Arju Man Ara',
        age: 40,
        father: {
            name: 'Md Alauddin Mandal',
            age: '45'
        }
    }
}
console.log(student.mother.name)
console.log(student.mother.father.name)  // ai ta holo chain access
console.log(student.mother.father?.name)  // ai ta holo ache ki na oi key, object ?
