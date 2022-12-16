import styles from "./Homestyle.module.css";

export default function Home() {
    return (
      <section className={styles.home}>
        <div className={styles.hometext}>
            <span>Welcome To</span>
            <h1>ISOG COLD-BREW</h1>
            <h2>MAKES YOUR DAY SPECIAL</h2> 
        </div>
        <div className={styles.homeimg}>
            <img src="americano0.png"/>
        </div>
    </section>
   

      
    );
  }
  // this is first project and it merges the files