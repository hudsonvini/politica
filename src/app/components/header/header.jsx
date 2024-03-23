import Link from "next/link";
import styles from "./header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={styles.menuLista}>
          <li>
            <span className={styles.cargo}>SENADOR</span>
          </li>
          <li>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/historia">
              História
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/noticias">
              Notícias
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/agenda">
              Agenda
            </Link>
          </li>
        </ul>
      </nav>
      <div className="">
        <Link className={styles.linkCampanha} href="#">
          Apoie a campanha
        </Link>
      </div>
    </header>
  );
}
