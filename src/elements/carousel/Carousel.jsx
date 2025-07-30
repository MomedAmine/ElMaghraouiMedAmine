import { useEffect, useState } from 'react'
import styles from './Carousel.module.css'

function Carousel(params) {
    
    const [curr, setCurr] = useState(0)
    const vuesList = params.jobs
    const goUp =()=>{
        setCurr((curr) => (curr === 0 ? curr: curr - 1))
    }
    const goDown =()=>{
        setCurr((curr) => (curr === params.jobs.length - 1 ? curr : curr + 1))
    }
    return(
        <div className= {styles.carContainer}>
            <div className= {styles.contentcontainer}>
                <div className= {styles.contentVue} style={{ transform: `translateY(-${curr * 55}vh` }}>
                    {vuesList}
                </div>
            </div>
            <div className= {styles.switchVue}>
                <button className= {styles.vUP} onClick={goUp} style={{opacity:(curr==0)?"0.2":"1"}}> v </button>
                <button className= {styles.vdown} onClick={goDown} style={{opacity:(curr==params.jobs.length - 1)?"0.2":"1"}}> v </button>
            </div>
        </div>
    )
}
export default Carousel