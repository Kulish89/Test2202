import { Content } from "./Content/Content";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import s from "./Main.module.css";

export const Main = () => {
  return (
    <div className={s.mainPage}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
