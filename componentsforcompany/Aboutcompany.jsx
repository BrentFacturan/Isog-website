import styles from "./Aboutcompany.module.css";

export default function Aboutcompany() {
    return (
    <div className={styles.misspic}>  
        <img src="comp1.png" alt=""/> 
        <div className={styles.mission}>
            <p>IMission:        Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the
            standard dummy text ever since the 1500s</p>   
            <a href="#" className={styles.btn}>LEARN MORE</a>       
    </div>       
    </div>
    );
  }