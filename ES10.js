//Function Flat
let array= [1,2,3, [1,2,3, [1,2,3]]]
console.log(array.flat(2))

//Function FlatMap
let array2=[1,2,3,4,5]
console.log(array2.flatMap(value => [value*2]))

//Function TrimStart
let hello= '                hello World'
console.log(hello)
console.log(hello.trimStart())

//Turning an array into an object
array3=[['name', 'Pepito'], ['age', 30]]
object3= Object.fromEntries(array3)
console.log(object3)
console.log(Object.entries(object3))