import styles from "./Header.module.css"
import CVTOF from "../../assets/CVTOF1.png"


function Header(params) {
    return(
        <div className={styles.headerContainer}>
            {/* 
            PIC
            NAME
            Proffesion
            Introduction
            */}
            <img src={CVTOF} className={styles.cvtof} alt="ME" />
            <h1>MOHAMED EL AMINE EL MAGHRAOUI</h1>
        </div>
    )
}
export default Header