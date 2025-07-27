import styles from "./Section.module.css"

function Section(params) {
    return(
        <div className={styles.sectionContainer} id={params.Id}>
            <div className={styles.titleContainer}>
                <div className={styles.iconDiv}>
                    <i className={params.icon}></i>
                </div>
                <h2>{params.title}</h2>
            </div>
            <div>{params.content}</div>
        </div>
    )
}

export default Section