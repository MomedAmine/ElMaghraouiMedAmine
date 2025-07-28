import styles from "./Exps.module.css"
import Exp from "./Exp/Exp"

function Exps(params) {
    const intern1 = {
        role:"Software Engineering intern",
        date:"Jul 2022-Sept2022",
        company:"Capgemini Engineering",
        work:<ul>
        <li>Developed a VBA-based Excel tool to extract structured data from DOCX files using Regular Expressions (RegEx)</li>
            <li>Implemented data cleaning and normalization processes to align outputs with standardized input formats</li>
            <li>Designed a MATLAB script to automatically generate complex Simulink diagrams based on pre-processed data</li>
            <li>Enabled automated simulation and feature applicability testing across multiple automotive projects</li>
        </ul>
    }
    return(
        <div className={styles.expsContainer}>
            <Exp role = {intern1.role} date= {intern1.date} company={intern1.company} work={intern1.work}/>
        </div>
        )
    
}
export default Exps