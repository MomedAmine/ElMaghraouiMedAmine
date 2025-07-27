import styles from "./Skills.module.css"
function Skills(params) {
    return(
        <div className={styles.skillsContainer}>
            <i class="fa-brands fa-python"></i>
            <i class="fa-brands fa-square-js"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-node-js"></i>
            <i class="fa-brands fa-css"></i>
            <p>C</p>
            <p>C++</p>
            <p>C#</p>
        </div>
    )
}
export default Skills