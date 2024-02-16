import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Brainwave.io
      </Link>
      <input className={styles.menu_btn} type="checkbox" id="menu-btn" />
      <label className={styles.menu_icon} for="menu-btn">
        <span className={styles.navicon}></span>
      </label>
      <nav className={styles.menu}>
        <ul className={styles.nav_links}>
          <li>
            <Link href="/demos">Demos</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className={styles.nav_buttons}>
          <Link href="/sign-in">
            <button className={styles.sign_in_button}>Sign In</button>
          </Link>
          <Link href="/sign-up">
            <button className={styles.sign_in_button}>Sign Up</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
