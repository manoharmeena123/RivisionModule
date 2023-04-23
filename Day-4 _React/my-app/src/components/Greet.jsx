import styles from "./Greet.module.css"

function Greet(){
    return (
      <>
      <h1 className={styles.App} >Greeting</h1>
      <h1 className={styles.header}>World</h1>
      <h1 className={styles.monu}>Manohar</h1>
      </>
    )
  }

  export default Greet