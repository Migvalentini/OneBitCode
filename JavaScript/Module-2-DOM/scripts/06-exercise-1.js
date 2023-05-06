function add_player() {
   const name = document.querySelector('#add_name').value
   const position = document.querySelector('#add_position').value
   const number = document.querySelector('#add_number').value

   const confirmation = confirm(`Add ${name} as ${position} and with ${number} shirt number?`)

   if (confirmation) {
      const ol = document.querySelector('#team')
      const li = document.createElement('li')
      li.id = 'player_' + number
      li.innerHTML = `Name: ${name} - Position: ${position} - Number: ${number}`

      ol.appendChild(li)

      document.querySelector('#add_name').value = ''
      document.querySelector('#add_position').value = ''
      document.querySelector('#add_number').value = ''
   }
   
}

function remove_player() {
   const ol = document.querySelector('#team')
   const number = document.querySelector('#remove_number').value
   const player_to_remove = document.getElementById('player_' + number)

   const confirmation = confirm('Do you want remove the player ' + player_to_remove.innerText + '?')

   if (confirmation) {
      ol.removeChild(player_to_remove)
      document.querySelector('#remove_number').value = ''
   }
}