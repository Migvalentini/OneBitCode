/*
BROWSER STORAGE:

=> Session Storage (Client Side):
    - Simple ways to store data in the browser while browsing
    - Persist even after changing pages on a website while the window is open
    - Exists only while that site's window is open, when closing the sessionStorage is cleared
=> Local Storage (Client Side):
    - Data stored in the browser that persists even after closing the browser window
    - Exist 'forever' until removed, has no expiration date
=> Cookies (Client Side / Server Side):
    - Data stored in small text files in the client computer
    - Can own a expiration date
    - The traditional way to allow 'remembering' information even after closing the browser
    - They are sent in requests and can exist on the server, being returned when an html page is requested
*/

document.querySelector('#sessionBtn').addEventListener('click', function() {
    const input = document.querySelector('#session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.querySelector('#readSession').addEventListener('click', function() {
    const info = sessionStorage.getItem('info')
    alert('Information saved to Session Storage is: ' + info)
})

document.querySelector('#localBtn').addEventListener('click', function() {
    const input = document.querySelector('#local')
    localStorage.setItem('info-2', input.value)
    input.value = ''
})

document.querySelector('#readLocal').addEventListener('click', function() {
    const text = localStorage.getItem('info-2')
    alert('Text saved to Local Storage is: ' + text)
})

document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023, 10, 10) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.querySelector('#cookie2Btn').addEventListener('click', function() {
    const input = document.getElementById('cookie2')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023, 10, 10) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})