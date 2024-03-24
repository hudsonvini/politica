import Link from "next/link";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      {/* Header section */}
      <nav className={styles.menu}>
        {/* Navigation menu */}
        <ul className={styles.menuLista}>
          <li>
            {/* Senator title */}
            <span className={styles.cargo}>SENADOR</span>
          </li>
          <li>
            {/* Home link */}
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li>
            {/* History link */}
            <Link className={styles.link} href="/historia">
              História
            </Link>
          </li>
          <li>
            {/* News link */}
            <Link className={styles.link} href="/noticias">
              Notícias
            </Link>
          </li>
          <li>
            {/* Agenda link */}
            <Link className={styles.link} href="/agenda">
              Agenda
            </Link>
          </li>
        </ul>
      </nav>
      <div className="">
        {/* Campaign link */}
        <Link className={styles.linkCampanha} href="#">
          Apoie a campanha
        </Link>
      </div>
    </header>
  );
}
