import s from "./Counter.module.css";

export const Counter = () => {
  return (
    <div className={s.counterPage}>
      <div className={s.counter_item}>
        <p className={s.counter_number}>92</p>
        <div className={s.counter_title}>
          <p>Days</p>
        </div>
      </div>
      <span className={s.counter_points}>:</span>
      <div className={s.counter_item}>
        <p className={s.counter_number}>11</p>
        <div className={s.counter_title}>
          <p>Hours</p>
        </div>
      </div>
      <span className={s.counter_points}>:</span>
      <div className={s.counter_item}>
        <p className={s.counter_number}>42</p>
        <div className={s.counter_title}>
          <p>Minutes</p>
        </div>
      </div>
      <span className={s.counter_points}>:</span>
      <div className={s.counter_item}>
        <p className={s.counter_number}>48</p>
        <div className={s.counter_title}>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};
