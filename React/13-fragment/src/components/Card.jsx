import '../styles/Card.css'

export default function Card() {
   return (
      <div className="container">
         <div className="img">
            <img src="../../public/miguel.png" alt="Miguel Image" />
         </div>
         <div className="texts">
            <h1>Miguel Valentini</h1>
            <p>The student who is studying the computer technician and is dedicating himself to the OneBitCode course has promising skills in the programming area. With a solid background in programming languages, software development and problem solving, he is preparing for a solid career in the technology industry. In addition, with the aim of living in Canada in the future, students are investing in their professional development, seeking to keep up with market trends and improve their skills in order to become a highly qualified and internationally competitive professional.</p>
            <a href="https://github.com/Migvalentini" target='_blank'><button>Visit GitHub</button></a>
            <a href="https://www.linkedin.com/in/migvalentini/" target='_blank'><button>Visit Linkedin</button></a>
         </div>
      </div>
   )
}