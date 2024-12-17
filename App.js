// 

// 
let numbers = [];

// 
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
}
console.log("Unsorted Array:", numbers);


function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    console.log("Bubble Sort Process:");
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                console.log(`Swapped ${arr[j]} and ${arr[j + 1]}`);
            }
        }
        console.log("Array after pass:", arr);
        if (!swapped) {
            break;
        }
    }
    return arr;
}

let sortedArray = bubbleSort(numbers);
console.log("Sorted Array:", sortedArray);
