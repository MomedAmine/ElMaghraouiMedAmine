import styles from "./MenuBtn.module.css";

function MenuBtn(params) {
  return (
    <label className={styles.burger} htmlFor="burger">
      <input
        type="checkbox"
        id="burger"
        // value={params.mStatus}
        onChange={params.setmStatus}
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}
export default MenuBtn;
