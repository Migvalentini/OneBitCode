import { useState } from 'react'
import LinkButton from '../LinkButton'
import Title from '../Title'
import ProfileSection from './ProfileSection'
import styles from './styles.module.css'

export default function Profile(props) {
   const [followText, setFollowTest] = useState("Follow")
   const [isDisabled, setIsDisabled] = useState(false);
   
   function handleClick() {
      alert("Now you are following!")
      setFollowTest("Following")
      setIsDisabled(true);
   }

   return (
      <div className={styles.container}>
         <img className={styles.avatar} src={props.avatar} alt={props.name} />
         <Title>
            <span>{props.name}</span>
            <button
               className={styles.followButton}
               onClick={handleClick}
               disabled={isDisabled}
            >
               {followText}
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