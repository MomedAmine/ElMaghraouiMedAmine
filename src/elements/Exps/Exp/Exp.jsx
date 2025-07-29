import styles from "./Exp.module.css";
function Exp(params) {
  return (
    <div className={styles.expWraper}>
      <div className={styles.head}>
        <h3 className={styles.divTtl}>{params.role}</h3>
        <div>
          <p className={styles.divTtl}>{params.company}</p>
          <p style={{ transform: "translateY(-100%)" }}>{params.date}</p>
          <div>
            <p>{params.work}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Exp;
