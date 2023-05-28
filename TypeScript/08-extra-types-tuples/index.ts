let crew: [string, string, string] = ['', '', '']

crew[0] = 'Miguel'
crew[1] = 'Juan'
crew[2] = 'Jose'
// crew[3] = 'Isaac' Tuple type '[string, string, string]' of length '3' has no element at index '3'.

let point: [number, number, string, boolean]

point = [2, 5, 'Test', true]
//point = [2, 5, 7]
// Type '[number, number, number]' is not assignable to type '[number, number]'.
// Source has 3 element(s) but target allows only 2.

// Destructuring: 
let [x, y] = point

// React:
// const [name, setName] = useState('')