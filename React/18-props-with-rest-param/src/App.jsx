import Profile from "./components/Profile"

export default function App() {
  return (
    <div className="app">
      <Profile 
          avatar="https://media.discordapp.net/attachments/1120389108913684561/1125481299902201936/IMG_3155.png?width=292&height=389"
          name="Miguel Valentini"
          bio="Student Programming"
          email="miguelvalentini2006@gmail.com"
          phone="+55 (54) 991711651"
          githubUrl="https://github.com/Migvalentini"
          linkedinUrl="https://www.linkedin.com/in/migvalentini/"
      />
    </div>
  )
}