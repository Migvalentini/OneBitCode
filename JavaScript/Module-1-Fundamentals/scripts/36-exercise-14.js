function calculate_triangular_area() {
   let base = parseFloat(prompt("Enter the base:"))
   let height = parseFloat(prompt("Enter the height:"))
   return (base * height) / 2
}

function calculate_rectangular_area() {
   let base = parseFloat(prompt("Enter the base:"))
   let height = parseFloat(prompt("Enter the height:"))
   return base * height
}

function calculate_square_area() {
   let side = parseFloat(prompt("Enter the side:"))
   return side * side
}

function calculate_trapeze_area() {
   let smaller_base = parseFloat(prompt("Enter the smaller base:"))
   let larger_base = parseFloat(prompt("Enter the larger base:"))
   let height = parseFloat(prompt("Enter the height:"))
   return (smaller_base + larger_base) * height / 2
}

function calculate_circle_area() {
   let radius = parseFloat(prompt("Enter the radius:"))
   return 3.14 * radius ** 2
}

function show_menu() {
    return prompt(
      "Welcome to Geometric Shapes Menu!\n" +
      "Options:\n" +
      "1) Triangular Area\n" +
      "2) Rectangular Area\n" +
      "3) Square Area\n" +
      "4) Trapeze Area\n" +
      "5) Circle Area\n" +
      "6) Exit"
   )
}

let option = ""
let result = 0

function execute() {
   while (option !== "6") {
      option = show_menu()
      switch (option) {
         case "1":
            result = calculate_triangular_area()
            break
         case "2":
            result = calculate_rectangular_area()
            break
         case "3":
            result = calculate_square_area()
            break
         case "4":
            result = calculate_trapeze_area()
            break
         case "5":
            result = calculate_circle_area()
            break
         case "6":
            alert("Leaving...")
            break
         default:
            alert("[ERROR] Invalid Answer!")
      }

      if (result) {
         alert("The result is "+ result + "m²")
      }
   }
}

execute()