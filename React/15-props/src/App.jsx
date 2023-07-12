import Card from "./components/Card"
import miguelImg from './assets/miguel.png'
import diegoImg from './assets/diego.jpg'

export default function App() {
  return (
    <>
      <Card title="Miguel Valentini" posterImg={miguelImg}/>
      <Card title="Diego Silveira" posterImg={diegoImg}/>
    </>
  )
}