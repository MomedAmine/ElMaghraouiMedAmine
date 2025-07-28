import { useState } from "react";
import styles from "./App.module.css";
import Header from "./elements/Header/Header";
import Section from "./elements/Section/Section";
import Edu from "./elements/edu/Edu";
import Skills from "./elements/skills/Skills";
import Menu from "./elements/Menu/Menu";

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
      <Section icon="fa-solid fa-user-tie" title="EXPERIENCE" Id="EXPERIENCE" />
      <Section
        icon="fa-solid fa-diagram-project"
        title="PROJECTS"
        Id="PROJECTS"
      />
      <Section
        icon="fa-solid fa-address-card"
        title="REACH OUT"
        Id="REACH_OUT"
      />
    </div>
  );
}

export default App;
