import styles from "./Projects.module.css"
import Carousel from "../carousel/Carousel"
import Project from "./Project/Project"
import LP_Budgeteer from "/assets/LP_Budgeteer.png?URL"

function Projects(params) {
    const Budgeteer = {
        // image: LP_Budgeteer,
        title :"BUDGETEER",
        description:" A personal finance app that helps users track expenses, set budgets, and monitor savings goals to manage their money more effectively.",
        tools :[
            <i className="fa-brands fa-square-js"></i>,
            <i class="fa-brands fa-react"></i>,
            <i className="fa-brands fa-html5"></i>,
            <i className="fa-brands fa-node-js"></i> ,
            <i className="fa-brands fa-css3-alt"></i>,
            <i className="fa-solid fa-fire"></i>,],
        link : "https://budgeteer-d17f6.web.app/#",
    }
    const proj = <Project ttl={Budgeteer.title} img={LP_Budgeteer} description={Budgeteer.description} link={Budgeteer.link} tools={Budgeteer.tools}/>
    return(
        <div style={{maxWidth:'80vw'}}>
            {/* <Carousel jobs={proj}/> */}
            {proj}
        </div>
    )
}
export default Projects