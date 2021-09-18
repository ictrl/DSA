const name = (array, targetSum) => {
    if(!array.length) return [];

    array = array.sort((a,b)=> a-b);

    let startIndex = 0;
    let endIndex = array.length-1;

    let currentSum = array[startIndex] + array[endIndex];

    if(currentSum === targetSum) return [start, end];
    array.forEach(e, i => {
    if(currentSum < targetSum) {
        startIndex = startIndex+1;
    }
    if(currentSum > targetSum) {
        endIndex = endIndex-1;
    }
    if(currentSum === targetSum) return [start, end];
    });
}
