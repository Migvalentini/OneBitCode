/*

*/

const one_dimensional = [
   "1° Level",
   "2° Level",
   "3° Level",
]

const two_dimensional = [
   [
      "1° Level",
      "2° Level",
      "3° Level"
   ],[
      "4° Level",
      "5° Level",
      "6° Level"
   ],[
      "7° Level",
      "8° Level",
      "9° Level"
   ]
]

const two_dimensional_2 = [
   "1° Level",
   ["2° Level", 42, true],
   [
      ["3° level, 1° Item", "Hello World!"],
      ["3° level, 2° Item", "Hello World!"],
   ],
   []
]

const matrix = [
   ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
   ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
   ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
 ]

console.log(one_dimensional[1])
console.log(two_dimensional[2][1])
console.log(two_dimensional_2[2][1][1])
console.table(matrix)

/* matrix.push("New Row")
matrix[0].push("New Column")
console.table(matrix) */

for (let r = 0; r < matrix.length; r++) {
   for (let c = 0; c < matrix[0].length; c++) {
      const element = matrix[r][c]
      console.log(`Position: (${r}, ${c}) Value: ${element}`)
   }
}