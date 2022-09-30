const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = reducer(batteryBatches, 0)

function reducer(array, accumulator){
    return array.reduce(counter, accumulator)
}

function counter(total, value){
    return total += value
}