//Case 1
let word1= "hello"
let word2= "world"
console.log(`${word1} ${word2} hehe`)

//Case 2
let sentence1= `Así se hace un 
salto de línea`
console.log(sentence1)

//Case 3 OLD WAY
let person={
    'name':'Armando',
    'age':20,
    'country': 'col'
}
console.log(person.name, person.age, person.country)

//ES6 NEW WAY
let {name, age, country}= person
console.log(name, age, country)

//Case 4
let team1=['Carlos', 'Diego', 'Pedro']
let team2=['María', 'Diana', 'Gabriela']
let education=['Pepito', ...team1, ...team2]
console.log(education)


//Case 5
//ES5
let name2= "Pepito"
let age2= 23
obj= {name: name2, age: age2}
console.log(obj)
//ES6 
obj2= {name2, age2}
console.log(obj2)


//Case 6
//ES5
const names= [
    {name3: 'Oscar', age3: 32},
    {name3: 'Diego', age3: 40}
]

let listOfNames= names.map(function(element){
    console.log(element.name3)
})
//ES6 ARROW FUNCTIONS
let listOfNames2= names.map(element=> console.log(element.name3))