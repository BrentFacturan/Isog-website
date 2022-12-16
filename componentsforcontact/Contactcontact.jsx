import styles from "./Contactcontact.module.css";

export default function Contactcontact() {
    return (
        <div className={styles.contpic}>  
        <img src="cont1.png" alt=""/> 
        <div className={styles.contact}>
            <h3>How can we help you?</h3>   
            <a href="#" className={styles.btn}>SEE OUR CONTACTS</a>       
    </div>       
    </div>    

      
    );
  }