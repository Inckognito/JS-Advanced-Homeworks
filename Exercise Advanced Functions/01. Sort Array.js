function sortArray(inputArray, sortMethod){
    let ascending = function (a,b){return a-b}
    let descending = function (a,b){return b-a}
    let sort = {
        'asc': ascending,
        'desc': descending
    }
    return inputArray.sort(sort[sortMethod])
}