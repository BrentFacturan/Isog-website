import styles from "./Aboutstyle.module.css";

export default function About() {
    return (
      <section className={styles.abouttext}>


       <div className={styles.abouttxt}>
        <h2> Serving coffee everyday from 7am to 4pm</h2>
        <h2>Dasmarinas</h2>
          <h5>Exact Address ng Store</h5>
        <h2>You want us to come in your location?</h2>
          <h5>Franchise now </h5>
        </div>

        <div className={styles.aboutimage}>
        <img src="Rectangle 5.png"/>
        </div>
        
    </section>
    

      
    );
  }