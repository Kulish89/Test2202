import s from "./Event.module.css";
import { EventType } from "../EventsList";

type EventPropsType = {
  event: EventType;
  isActive: boolean;
  setActive: (id: string) => void;
};

export const Event = ({ event, isActive, setActive }: EventPropsType) => {
  return (
    <div
      className={isActive ? s.event + " " + s.event_active : s.event}
      onClick={() => {
        setActive(event.id);
      }}
    >
      <div
        className={s.event_description}
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <h3 className={s.event_id}>{event.id}</h3>
        <h4 className={s.event_title}>{event.name}</h4>
      </div>
      <div className={s.event_card}>
        <img src={event.image} alt="" className={s.card_image} />
        <h5 className={s.card_id}>{event.id}</h5>
        <div className={s.card_description}>
          <h4 className={s.card_title}>{event.name}</h4>
          <p className={s.card_date}>{event.date}</p>
          <a
            href={"https://www.google.com"}
            className={s.card_link}
            target={"_blank"}
            rel="noreferrer"
          >
            <span>More information</span>
          </a>
        </div>
      </div>
    </div>
  );
};
