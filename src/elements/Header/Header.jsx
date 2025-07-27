import styles from "./Header.module.css"
import CVTOF from "../../assets/CVTOF2.png"


function Header(params) {
    return(
        <div className={styles.headerContainer}>
            {/* 
            PIC
            NAME
            Proffesion
            Introduction
            */}
            <div className={styles.picDiv}>
                <img src={CVTOF} className={styles.cvtof} alt="ME" />
            </div>
            <div className={styles.infoDiv}>
                <h1>MOHAMED EL AMINE EL MAGHRAOUI</h1>
                <p className={styles.job}>SOFTWARE ENGINEER</p>
                <p className={styles.loc}>MOROCCO</p>
            </div>
            <div className={styles.intro}>
                <p>I'm a <b>software developer</b> with hands-on experience in building reliable fullstack applications, with solid technical expertise and a consistent focus on delivering effective, real-world.</p>
            </div>
        </div>
    )
}
export default Header