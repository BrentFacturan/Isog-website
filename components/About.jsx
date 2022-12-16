import styles from "./Aboutstyle.module.css";

export default function About() {
    return (
      <section className={styles.abouttext}>
        <div className={styles.aboutimage}>
        <img src="public\background.jpg"/>
        </div>

       <div className={styles.abouttxt}>
       <h2> ABOUT US</h2>
        <p>Isog [í.sug.] : strong (adj.) in Hiligaynon and Cebuano </p>
        <p>Our product is made from Dark Roast Arabica Coffee Beans.</p>
        <p>Coarse grinded an d steeped cold for 12 to 14 hours.</p>
        </div>
    </section>

      
    );
  }
  // this is first project and it merges the files