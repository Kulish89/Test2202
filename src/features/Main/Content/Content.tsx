import s from "./Content.module.css";
import { Counter } from "./Counter/Counter";
import arrowRight from "../../../assets/icons/arrow-right.svg";

export const Content = () => {
  return (
    <div className={s.contentPage}>
      <div className={s.contentPage_description}>
        <h2 className={s.contentPage_title}>under construction</h2>
        <p className={s.contentPage_subtitle}>
          We're making lots of improvements and will be back soon
        </p>
      </div>
      <Counter />
      <div className={s.contentPage_Link}>
        <p className={s.link_description}>
          Check our event page when you wait:
        </p>
        <a
          className={s.link}
          href={"https://google.com"}
          target={"_blank"}
          rel="noreferrer"
        >
          <span className={s.link_title}>Go to the event</span>
          <img className={s.link_icon} src={arrowRight} alt="" />
        </a>
      </div>
    </div>
  );
};
