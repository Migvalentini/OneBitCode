import { SubTitle } from "./components/SubTitle"
import Title from "./components/Title"
import StatusText from "./components/StatusText"
import styles from "./App.module.css"

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <SubTitle />
      <StatusText />
    </div>
  )
}