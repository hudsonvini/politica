"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import TransitionLink from "../TransitionLink/TransitionLink";

export function Header() {


  // Abrir Modal Mobile
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1000); // Set isMobile after component mounts
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Add dependency array to useEffect

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function openMenu() {
    setMenuOpen(true);
  }
  return (
    <header className={styles.header}>
      {/* Header section */}
      <nav className={styles.menu}>
        <div>
          {/* Senator title */}
          <span className={styles.cargo}>SENADOR</span>
        </div>
        <div onClick={openMenu} className={styles.menuIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
        {/* Navigation menu */}
        <ul
          className={styles.menuList}
          style={{ display: isMobile ? (menuOpen ? "flex" : "none") : "flex" }}
        >
          <div onClick={closeMenu}>
            <svg
              className={styles.closeMenu}
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </div>
          <li>
            {/* Home link */}
            <TransitionLink 
              href={"/"}
              label={"Home"}
            />
          </li>
          <li>
            {/* History link */}
            <TransitionLink 
              href={"/historia"}
              label={"historia"}
            />
          </li>
          <li>
            {/* News link */}
            <TransitionLink 
              href={"/noticias"}
              label={"noticias"}
            />
          </li>
          <li>
            {/* Agenda link */}
            <TransitionLink 
              href={"/agenda"}
              label={"agenda"}
            />
          </li>
        </ul>
      </nav>
      <div className={styles.campaign}>
        {/* Campaign link */}
        <Link className={styles.linkCampanha} href="#">
          Apoie a campanha
        </Link>
      </div>
    </header>
  );
}
