import { useState } from 'react'
import './styles/App.css'

function App() {
  const [ password, setPassword ] = useState('')
  const [ copyText, setCopyText ] = useState('Copy')

  function generatePassword(length = 12, includeUppercase = true, includeNumbers = true, includeSymbols = true) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?'
    
    let charset = lowercaseLetters
    if (includeUppercase) charset += uppercaseLetters
    if (includeNumbers) charset += numbers
    if (includeSymbols) charset += symbols
    
    let newPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      newPassword += charset[randomIndex]
    }
    setPassword(newPassword)
    setCopyText('Copy')
    console.log(newPassword)
  }

  function copyToClipboard() {
    console.log('copy')
    window.navigator.clipboard.writeText(password)
    setCopyText('Copied!')
    console.log(`Password Copied: ${password}`)
  }
  return (
    <>
      <h1>Password Generator</h1>
      <div className="buttons">
        <button onClick={() => generatePassword()}>Generate</button>
        <button onClick={copyToClipboard}>{copyText}</button><br />
      </div>
      <span>{password}</span>
    </>
  )
}

export default App
