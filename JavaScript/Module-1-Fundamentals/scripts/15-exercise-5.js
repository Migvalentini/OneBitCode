const meters = parseFloat(prompt("Enter a number in meters:"))
const unit_measurement = prompt("Enter a unit of measurement to convert the meters:\n mm) Millimeter\n cm) Centimeter\n dm) Decimeter\n dam) Decameter\n hm) Hectometer\n km) Kilometer")
let result = 0

switch (unit_measurement) {
   case "mm":
      result = meters * 1000
      break
   case "cm":
      result = meters * 100
      break
   case "dm":
      result = meters * 10
      break
   case "dam":
      result = meters / 10
      break
   case "hm":
      result = meters / 100
      break
   case "km":
      result = meters / 1000
      break
   default:
      alert("[ERROR] Invalid answer!")
}

if (result !== 0){
   alert(`The result of ${meters} meters in ${unit_measurement} is ${result} ${unit_measurement}`)
}