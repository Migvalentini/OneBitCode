function add_contact() {
   const contact_section = document.getElementById('contacts_list')
   const h3 = document.createElement('h3')

   h3.innerText = "Contact"
   
   const ul = document.createElement('ul')

   const name_li = document.createElement('li')
   name_li.innerText = "Name: "
   const name_input = document.createElement('input')
   name_input.type = 'text'
   name_input.name = 'full_name'
   name_li.appendChild(name_input)
   ul.appendChild(name_li)
   ul.appendChild(document.createElement('br'))

   const phone_li = document.createElement('li')
   phone_li.innerText = "Telephone: "
   const phone_input = document.createElement('input')
   phone_input.type = 'text'
   phone_input.name = 'phone'
   phone_li.appendChild(phone_input)
   ul.appendChild(phone_li)
   ul.appendChild(document.createElement('br'))

   const address_li = document.createElement('li')
   address_li.innerHTML = '<label for="address"> Address: </label>'
   const address_input = document.createElement('input')
   address_input.type = 'text'
   address_input.name = 'address'
   address_input.id = 'address'
   address_li.appendChild(address_input)
   ul.appendChild(address_li)
   ul.appendChild(document.createElement('br'))

   contact_section.append(h3, ul)
}

function remove_contact() {
   const contact_section = document.getElementById('contacts_list')

   const titles = document.getElementsByTagName('h3')
   const contacts = document.getElementsByTagName('ul')

   contact_section.removeChild(titles[titles.length - 1])
   contact_section.removeChild(contacts[contacts.length - 1])
}