import styles from "./Exp.module.css"
function Exp(params) {
    return (
        <div className={styles.expWraper}>
            <div className={styles.head}>
                <h3>{params.role}</h3>
                <p>{params.date}</p>
            </div>
            <div>
                <p>{params.company}</p>
            </div>
            <div>
                <p>{params.work}</p>
            </div>
        </div>
    )
}
export default Exp