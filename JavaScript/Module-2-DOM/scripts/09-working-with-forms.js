const form = document.querySelector('#orderForm')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = document.querySelector('#name').value
    const address = document.querySelector('#address').value
    const bread_type = document.querySelector('#breadType').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('#observations').value

    let salad = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += ' - ' + item.value + '\n'
    })

    console.log({
        name,
        address,
        bread_type,
        main,
        salad,
        observations
    })

    alert(
        "Order Placed!" +
        "\nClient Name: " + name +
        "\nDelivery Address: " + address +
        "\nBread Type: " + bread_type +
        "\nFilling: \n - " + main + "\n" + salad +
        "Observations: " + observations
      )
})