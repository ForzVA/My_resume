import s from "./header.module.scss";
import tg from "../../assets/images/tg.png";
import gh from "../../assets/images/github.png";
import linkedIn from "../../assets/images/linkedIn.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import cn from "classnames";

export const Header = () => {
  const [toggle, setToggle] = useState(true);
  console.log(toggle);

  const nav = toggle ? "none" : null;

  return (
    <header className={s.container}>
      <AnchorLink href="#main" className={s.nav_logo_smallScreen}>
        <div className={s.nav_logo}>AV</div>
      </AnchorLink>
      <div class={s.menu_btn} onClick={() => setToggle(!toggle)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav
        className={cn(s.nav, toggle ? s.nav_active : null)}
        onClick={() => setToggle(false)}
      >
        <AnchorLink href="#main" className={s.nav_logo_bigScreen}>
          <div className={s.nav_logo}>AV</div>
        </AnchorLink>
        <ul className={s.nav_buttons}>
          <li className={s.nav_buttons_button}>
            <AnchorLink href="#main">Главная</AnchorLink>
          </li>
          <li className={s.nav_buttons_button}>
            <AnchorLink href="#aboutMe">Обо мне</AnchorLink>
          </li>
          <li className={s.nav_buttons_button}>
            <AnchorLink href="#hardSkills">Навыки</AnchorLink>
          </li>
          <li className={s.nav_buttons_button}>
            <AnchorLink href="#courses">Курсы</AnchorLink>
          </li>
        </ul>
        <div className={s.nav_socialNetworks}>
          <a href="https://tlgg.ru/@AlexxVass" target="_blank" rel="noreferrer">
            <img src={tg} alt="Telegram" title="Telegram" />
          </a>
          <a href="https://github.com/ForzVA" target="_blank" rel="noreferrer">
            <img src={gh} alt="GitHub" title="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexvasilevsky/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="linkedIn" title="LinkedIn" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
