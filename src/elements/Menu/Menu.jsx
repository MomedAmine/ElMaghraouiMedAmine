import { useState } from "react";
import styles from "./Menu.module.css";

function Menu(params) {
  const [mOpen, setMOpen] = useState(false);
  return (
    <div className={styles.menuContainer}>
      <button onClick={() => setMOpen(!mOpen)}>
        {mOpen ? (
          <i class="fa-solid fa-xmark"></i>
        ) : (
          <i class="fa-solid fa-bars"></i>
        )}
      </button>
    </div>
  );
}
export default Menu;
