import s from "./header.module.scss";
import tg from "../../assets/images/tg.png";
import gh from "../../assets/images/github.png";
import linkedIn from "../../assets/images/linkedIn.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Header = () => {
  return (
    <div className={s.nav}>
      <AnchorLink href="#main" className={s.nav_buttons_button}>
        <div className={s.nav_logo}>AV</div>
      </AnchorLink>
      <div className={s.nav_buttons}>
        <AnchorLink href="#main" className={s.nav_buttons_button}>
          Главная
        </AnchorLink>
        <AnchorLink href="#aboutMe" className={s.nav_buttons_button}>
          Обо мне
        </AnchorLink>
        <AnchorLink href="#hardSkills" className={s.nav_buttons_button}>
          Навыки
        </AnchorLink>
        <AnchorLink href="#courses" className={s.nav_buttons_button}>
          Курсы
        </AnchorLink>
      </div>
      <div className={s.nav_socialNetworks}>
        <a href="https://tlgg.ru/@AlexxVass" target="_blank" rel="noreferrer">
          <img src={tg} alt="tg" title="Telegram" />
        </a>
        <a href="https://github.com/ForzVA" target="_blank" rel="noreferrer">
          <img src={gh} alt="gh" title="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/alexvasilevsky/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="linkedIn" title="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Header;
