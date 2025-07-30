import styles from "./Header.module.css";
import CVTOF from "../../assets/CVTOF2.png";
import { useState, useEffect } from "react";

function Header(params) {
  const [br1, setBr1] = useState(window.innerWidth < 700);
  const [br2, setBr2] = useState(window.innerWidth < 350);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function handleResize() {
    setBr1(window.innerWidth < 700);
    setBr2(window.innerWidth < 350);
  }
  return (
    <div className={styles.headerContainer} id = {params.Id}>
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
        <h1>
          MOHAMED {br2 ? <br /> : ""}EL AMINE {br1 ? <br /> : ""}EL MAGHRAOUI
        </h1>
        <p className={styles.job}>SOFTWARE ENGINEER</p>
        <p className={styles.loc}>MOROCCO</p>
      </div>
      <div className={styles.intro}>
        <p>
          I'm a <b>software developer</b> with hands-on experience in building
          reliable fullstack applications, with solid technical expertise and a
          consistent focus on delivering effective, real-world.
        </p>
      </div>
    </div>
  );
}
export default Header;
