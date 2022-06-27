const list2= [200, 40000000, 100, 500, ];
// list1.sort(function(a, b){
//     return a-b;
// })

let list1= list2.sort((a,b) => a-b)

const halflist1= parseInt(list1.length / 2);

// function isEven(number) {
//     if (number % 2===0){
//         return true;
//     } else{
//         return false;
//     }
// }

let isEven= (number)=> {
    if (number%2===0){
        return true
    } else{
        return false
    }
}



let median;

if (isEven(list1.length)) {
    
    const element1= list1[halflist1];
    const element2=list1[halflist1-1];
    let average= (element1+element2)/2;
    
    median= average;

} else{
    median= list1[halflist1Order]
}
console.log(median)