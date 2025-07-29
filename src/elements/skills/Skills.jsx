import styles from "./Skills.module.css"
import SSkill from "./SSkill/SSkill"
function Skills(params) {
    return(
        <div className={styles.skillsContainer}>
            <SSkill Icon = {<i className="fa-brands fa-python"></i>} ttl = "Python"/>
            <SSkill Icon = {<i className="fa-brands fa-square-js"></i>} ttl = "Javascript"/>
            <SSkill Icon = {<i className="fa-brands fa-html5"></i>} ttl = "HTML5"/>
            <SSkill Icon = {<i className="fa-brands fa-node-js"></i>} ttl = "Node.js"/>
            <SSkill Icon = {<i className="fa-brands fa-css3-alt"></i>} ttl = "CSS3"/>
            <SSkill Icon = {<i className="fa-solid fa-fire"></i>} ttl = "Firebase"/>
            <SSkill Icon = {<p>C</p>} ttl = "C Programing"/>
            <SSkill Icon = {<p>C#</p>} ttl = "C# Unity/.Net"/>
            {/* <SSkill icon = {<p>C++</p>} ttl = ""/> */}
        </div>
    )
}
export default Skills