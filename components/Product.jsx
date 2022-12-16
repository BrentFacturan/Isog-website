import styles from "./Productstyle.module.css";

export default function Product() {
    return (
        <section className={styles.product}>
        <div className={styles.pr}>
        <span>PRODUCT</span>
        <h1> ORDER NOW </h1>
    </div>
  
    <div className={styles.box}>
        <div className={styles.shop}>
            <div className={styles.shopimg}>
               <img src="p1.png" />
            </div>
            <div className={styles.stars}>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
            </div>
            <h2>LATTE</h2>
            <span>70 pesos</span>
            <a href="#" class="btn">ORDER NOW</a>       
        </div>

        <div className={styles.shop}>
            <div className={styles.shopimg}>
               <img src="p2.png" />
            </div>
            <div className={styles.stars}>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
            </div>
            <h2>MOCHA</h2>
            <span>70 pesos</span>
            <a href="#" class="btn">ORDER NOW</a>       
        </div>

        <div className={styles.shop}>
            <div className={styles.shopimg}>
               <img src="p3.png" />
            </div>
            <div className={styles.stars}>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
            </div>
            <h2>AMERICANO</h2>
            <span>70 pesos</span>
            <a href="#" class="btn">ORDER NOW</a>       
        </div>
    </div>
</section>

      

      
    );
  }
  // this is first project and it merges the files