const filterArray = (deleteFn, numbers) => {
    const result = [];
    for (let num of numbers) {
        if (!deleteFn(num)) result.push(num);
    }
    return result;
};