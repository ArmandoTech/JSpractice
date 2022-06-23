
//First method
function calculateArithmeticMedia(list) {

    let sumList= 0;

    for (var i=0; i < list.length; i++) {
        sumList= sumList + list[i];

    };
    const averageList= sumList / list.length;
    return averageList
};

//Second method

function calculateArithmeticMedia2(list) {
    const list2= list.reduce(
        function(acumulatedValue=0, nextValue) {
            return acumulatedValue + nextValue;
        }
    )

    const averageList2= list2/list.length;
    return averageList2
};
