import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <img src="./public/react.png" alt="Logo" />
      <h1>React</h1>
      <p>The library for web and native UI</p>
      <button>Learn React</button>
      <button>API Reference</button>
      <hr />
      <h2>Create UI of Components</h2>
      <p>React allows you to create UI from individual pieces called components</p>
      <hr />
      <h2>Next Steps</h2>
      <ul>
        <li>Use of dynamic data</li>
        <li>Creation of new components</li>
        <li>Components Styles</li>
      </ul>
    </div>
  )
}

export default App
