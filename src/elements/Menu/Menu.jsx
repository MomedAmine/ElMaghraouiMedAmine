import { useState } from "react";
import styles from "./Menu.module.css";
import MenuBtn from "./MenuBtn/MenuBtn";

function Menu(params) {
  const [mOpen, setMOpen] = useState(false);
  const handleMenu = () => {
    setMOpen(!mOpen);
  };
  return (
    <div className={styles.menuContainer}>
      <MenuBtn setmStatus={handleMenu} />
      <div
        style={{
          height: mOpen ? "40vh" : "0px",
        }}
        className={styles.linksDiv}
      >
        <a href ="#HOME">HOME</a>
        <a href ="#EDUCATION">EDUCATION</a>
        <a href ="#SKILLS">SKILLS</a>
        <a href ="#PROJECTS">PROJECTS</a>
        <a href ="#REACH_OUT">REACH_OUT</a>
      </div>
    </div>
  );
}
export default Menu;
