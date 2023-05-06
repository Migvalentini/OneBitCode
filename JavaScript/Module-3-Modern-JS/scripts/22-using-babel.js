// npx babel 22-using-babel.js = in the terminal
// npx babel 22-using-babel.js --out-file 22-using-babel-dist.js = create a babel file
// npx babel 22-using-babel.js --out-file 22-using-babel-dist.js --presets=@babel/preset-env = crate a babel file with the env presets
// npx babel src --out-dir dist --presets=@babel/preset-env = create a babel folder

const simple_average = (...number) => {
    const sum = number.reduce((accumulate, num) => accumulate + num, 0)
    return sum / number.length
}

const weighted_average = (...entries) => {
    const sum = entries.reduce((accumulate, {number, weight}) => accumulate + (number * weight), 0)
    const weight_sum = entries.reduce((accumulate, {weight}) => accumulate + (weight), 0)
    return sum / weight_sum
}

const median = (...numbers) => {
    const ordered_numbers = [...numbers].sort((a, b) => a - b )
    const middle = Math.floor(ordered_numbers.length / 2)
    if (ordered_numbers.length % 2 == 1) {
        return ordered_numbers[middle]
    }
    const first_element = ordered_numbers[middle - 1]
    const second_element = ordered_numbers[middle]
    return simple_average(first_element, second_element)
}

const mode = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num == n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}
console.log(`Simple Arithmetic Average: ${simple_average(1,2,3,4,5)}`)

console.log(`Weighted Arithmetic Average: ${weighted_average(
    {number: 7, weight: 2},
    {number: 9, weight: 5},
    {number: 3, weight: 1}
)}`)

console.log(`Median: ${median(15, 14, 8, 7, 3)}`)

console.log(`Mode: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)