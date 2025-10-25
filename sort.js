function sortArray(arr) {
    
    let sortedArr = [...arr];
    
    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = i + 1; j < sortedArr.length; j++) {
            if (sortedArr[i] > sortedArr[j]) {
                let temp = sortedArr[i];
                sortedArr[i] = sortedArr[j];
                sortedArr[j] = temp;
            }
        }
    }
    
    return sortedArr;
}