import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  const counter = useCounter()
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
      </div>
    </>
  )
}

export default App
