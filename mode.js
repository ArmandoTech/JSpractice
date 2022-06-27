
const list= [1,2,3,1,2,1,1,1,3,1,1,2,3,2,4,3,3];
const countList={};

list.map(function(element) {
    if (countList[element]) {
        countList[element] += 1;
    } else{
        countList[element]= 1;
    }
});

const listArray= Object.entries(countList).sort(
    function(a, b){
        return a[1]-b[1];
    }
);

mode= listArray[listArray.length - 1];
console.log(mode)