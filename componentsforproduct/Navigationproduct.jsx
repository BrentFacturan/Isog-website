import Link from "next/link";
import styles from "./Navigationproduct.module.css";

export default function Navigationproduct() {
    return (
       
        <header className={styles.header}>
            
            <div className={styles.logo}>
                <img src="LOGO.jpg "/>
            </div>
            <ul className={styles.navbar}>
            <li><Link href="/">HOME</Link></li>
                <li><Link href="/Product">PRODUCT</Link></li>
                <li><Link href="/Company">ABOUT</Link></li>
                <li><Link href="/Contact">CONTACT</Link></li>          
            </ul>
            
        
        
        </header>
   
        
      

        
    );
  }