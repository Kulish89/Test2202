import { EventsList } from "./EventsList";
import s from "./Events.module.css";
export const EventsPage = () => {
  return (
    <section className={s.eventsPage} id={"eventsPage"}>
      <h2 className={s.eventsPage_title}>all events</h2>
      <EventsList />
    </section>
  );
};
