import styles from "./RO.module.css"

function RO(params) {
    const onemailClick = async()=> {
            const text = "elmaghraoui.mohamedelamine@gmail.com"
            try {
                await navigator.clipboard.writeText(text);
                // console.log('Content copied to clipboard');
                alert('email copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy: ', err);
                alert('Failed to copy email.');
            }
        }
    return(
        <div className={styles.ros}>
            <a target="_blank" rel="noopener noreferrer"  href="https://github.com/MomedAmine"><i class="fa-brands fa-github"></i></a>
            <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/mohamed-el-amine-el-maghraoui-1aa02a28b/"><i class="fa-brands fa-linkedin"></i></a>
            <a target="_top" rel="noopener noreferrer"  href="mailto:elmaghraoui.mohamedelamine@gmail.com" onClick={onemailClick}><i class="fa-solid fa-envelope"></i></a>
        </div>
    )
}
export default RO