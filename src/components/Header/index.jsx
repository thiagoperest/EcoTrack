import {Link, NavLink} from "react-router-dom";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header>
      <menu>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLogo}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1598/1598431.png"
              alt="Logo"
            />
            <span className={styles.title}>EcoTrack</span>
          </Link>

          <section className={styles.navMenu}>
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? styles.navLinkActive : styles.navLinkDefault
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/favorite"
              className={({isActive}) =>
                isActive ? styles.navLinkActive : styles.navLinkDefault
              }
            >
              Favoritos
            </NavLink>

            <NavLink
              to="/config"
              className={({isActive}) =>
                isActive ? styles.navLinkActive : styles.navLinkDefault
              }
            >
              Configurações
            </NavLink>
          </section>
        </nav>
      </menu>
    </header>
  );
}
