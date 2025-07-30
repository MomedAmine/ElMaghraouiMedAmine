import styles from "./Project.module.css"

function Project(params) {
    return(
        <div className={styles.projContainer}>
            <img src={params.img} alt={params.ttl}/>
            <div>
                <h4>{params.ttl}</h4>
                <p>{params.description}</p>
            
            <div className={styles.tooldiv}>{params.tools}</div>
            <div className={styles.urlDiv}>
                <a target="_blank" rel="noopener noreferrer" href={params.link}><button>Visit link <i class="fa-solid fa-link"></i></button></a>
            </div>
            </div>
        </div>
    )
}
export default Project