/*
CREATING ELEMENTS IN THE DOM:

=> 1° Create the element
   document.createElement()
=> 2° Add content to the element 
   newElement.innerHTML = "Hello World"
=> 3° Add the element as a new node in the DOM
   element.appendChild(newElement)

=> We can also clone an DOM element 
*/

function addInput() {
   const ul = document.getElementById('inputs')

   const new_li = document.createElement('li')
   new_li.innerText = "New Input"

   const new_input = document.createElement('input')
   new_input.type = "text"
   new_input.name = "input"

   new_li.appendChild(new_input)
   ul.appendChild(new_li)
}