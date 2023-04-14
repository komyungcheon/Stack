function reverseArray(arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = stack.pop();
    }
    return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseArray(arr));

