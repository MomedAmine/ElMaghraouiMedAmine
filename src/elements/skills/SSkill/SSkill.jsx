import styles from "./SSkill.module.css"

function SSkill(params) {

    return(
        <div className={styles.sskillContainer} >
            {params.Icon}
            {/* <div className={styles.skillttl}></div> */}
            <h6>{params.ttl}</h6>
        </div>
    )
}
export default SSkill