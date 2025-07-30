import { useState } from "react";
import styles from "./App.module.css";
import Header from "./elements/Header/Header";
import Section from "./elements/Section/Section";
import Edu from "./elements/edu/Edu";
import Skills from "./elements/skills/Skills";
import Menu from "./elements/Menu/Menu";
import Exps from "./elements/Exps/Exps";
import Projects from "./elements/Projects/Projects";
import RO from "./elements/RO/RO";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.mainContainer}>
      <Menu />
      <Header Id="HOME"/>
      <Section
        content={<Edu />}
        icon="fa-solid fa-graduation-cap"
        title="EDUCATION"
        Id="EDUCATION"
      />
      <Section
        icon="fa-solid fa-gear"
        title="SKILLS"
        Id="SKILLS" 
        content = {<Skills/>}
      />
      <Section icon="fa-solid fa-user-tie" title="EXPERIENCE" Id="EXPERIENCE"  
        content = {<Exps/>}/>
      <Section
        icon="fa-solid fa-diagram-project"
        title="PROJECTS"
        Id="PROJECTS"
        content = {<Projects/>}
      />
      <Section
        icon="fa-solid fa-address-card"
        title="REACH OUT"
        Id="REACH_OUT"
        content = {<RO/>}
      />
    </div>
  );
}

export default App;
