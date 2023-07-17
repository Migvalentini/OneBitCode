import LinkButton from '../LinkButton'
import Title from '../Title'
import ProfileSection from './ProfileSection'
import styles from './styles.module.css'

export default function Profile(props) {
   function handleClick(ev) {
      console.log(ev)
      alert("Now you are following!")
   }

   return (
      <div className={styles.container}>
         <img className={styles.avatar} src={props.avatar} alt={props.name} />
         <Title>
            <span>{props.name}</span>
            <button
            className={styles.followButton}
               onClick={handleClick}
            >
               Follow
            </button>
         </Title>
         <ProfileSection className={styles.bio}>{props.bio}</ProfileSection>
         <ProfileSection className={styles.phone}>{props.phone}</ProfileSection>
         <ProfileSection className={styles.email}>{props.email}</ProfileSection>
         <ProfileSection 
            className={styles.buttons}
            id="links-section"
            data-test="some value"
            aria-label="social links"
         >
            <div>
               <LinkButton href={props.githubUrl}>GitHub</LinkButton>
               <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
            </div>
         </ProfileSection>
      </div>
   )
}