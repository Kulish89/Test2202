import logo from "../../../assets/icons/logo.svg";
import logoText from "../../../assets/icons/logo-text.png";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_content}>
        <a href={"#mainPage"} className={s.header_Logolink}>
          <img src={logo} alt="logo" />
        </a>
        <a href={"#mainPage"} className={s.header_Textlink}>
          <h1 className={s.textlink_title}>
            <img src={logoText} alt="logo-text" />
          </h1>
        </a>
      </div>
    </header>
  );
};
