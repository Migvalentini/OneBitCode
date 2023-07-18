import styles from './styles.module.css'

export default function LinkButton(props) {
   return (
      <a className={styles.button} href={props.href} target='_blank'>
         <button>{props.children}</button>
      </a>
   )
}