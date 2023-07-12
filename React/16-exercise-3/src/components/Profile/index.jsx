import styles from './styles.module.css'

export default function Profile(props) {
   return (
      <div className={styles.container}>
         <img className={styles.avatar} src={props.avatar} alt={props.name} />
         <h2 className={styles.name}>{props.name}</h2>
         <div className={styles.bio}>{props.bio}</div>
         <div className={styles.phone}>{props.phone}</div>
         <div className={styles.email}>{props.email}</div>
         <div className={styles.buttons}>
            <a href={props.githubUrl} target="_blank"><button>GitHub</button></a>
            <a href={props.linkedinUrl} target="_blank"><button>Linkedin</button></a>
         </div>
      </div>
   )
}