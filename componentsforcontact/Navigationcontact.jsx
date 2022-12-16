import styles from "./Navigationcontact.module.css";

export default function Navigationcontact() {
    return (
        <header className={styles.header}>
            
            <div className={styles.logo}>
                <img src="LOGO.jpg "/>
            </div>
            <ul className={styles.navbar}>
                <li><Link href="/index.js">HOME</Link></li>
                <li><Link href="#product">PRODUCT</Link></li>
                <li><Link href="#about">ABOUT</Link></li>
                <li><Link href="#contact">CONTACT</Link></li>            
            </ul>
            
        
        
            
   
        </header>
      

      
    );
  }