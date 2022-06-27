const colSalaries= colombia.map(function(element){
    return element.salary
})
const salariesSortedCol= colSalaries.sort(function(a, b){
    return a-b
})
const medianColombia= median(salariesSortedCol)
const sliceStart= (salariesSortedCol.length * 90)/100 //We need to start it on the 90% of the array
const salariesTop10Col= salariesSortedCol.slice(sliceStart, salariesSortedCol.length)
const MedianTop10Col= median(salariesTop10Col)

function isEven(number){
    return number % 2===0
}

function median(list){
    halfList= parseInt(list.length/2)

    if (isEven(list.length)){
        halfPerson=(list[halfList]+list[halfList-1])/2
        return halfPerson
    } else {
        halfPerson= list[halfList]
        return halfPerson
    }
}

console.log({
    medianColombia,
    MedianTop10Col,
})