import s from "./footer.module.scss";
// import photo from "../../assets/svg/icons8-реакция-400.png";

const Footer = () => {
  // Можно будет создать отдельную компоненту и вынести данные отдельно
  return (
    <div className={s.container}>
      <div className={s.svgLinks}>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/NfbyHexzVEDk/реакция"
          >
            React
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>

        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/108784/javascript"
          >
            JavaScript
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/cdYUlRaag9G9/docker"
          >
            Docker
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/21278/css3"
          >
            CSS3
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/20909/html-5"
          >
            HTML 5
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/38389/git"
          >
            Git
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>
        <div>
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/TCnKnYZFoOzM/telegram-app"
          >
            Telegram App
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/12598/github"
          >
            GitHub
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/60443/обеденные-кругом"
          >
            LinkedIn
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
