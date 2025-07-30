import styles from "./Exp.module.css";
function Exp(params) {
  return (
    <div className={styles.expWraper}>
      <div className={styles.head}>
        <h3 className={styles.divTtl}>{params.role}</h3>
        <div>
          <p className={styles.divTtl}>{params.company}</p>
          <p >{params.date}</p>
          <div>
            {params.work}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Exp;
