const array1 = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];
const arr = [false, false, false]
const re = [];
array1.forEach((element) => {
    console.log(element.name);
    re.push(element.name);
    if (re.includes('a') === true) {
        arr.splice(0, 1, true)
    }
    else if (re.includes('a') === false) {
        arr.splice(0, 1, false)
    }
});
console.log(arr)
