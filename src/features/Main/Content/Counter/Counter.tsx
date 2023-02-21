import { useEffect, useState } from "react";
import s from "./Counter.module.css";

export const Counter = () => {
  const finishDate = new Date(2023, 4, 31);
  const [finishTime] = useState(finishDate.getTime());
  const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const diff = (finishTime - Number(new Date())) / 1000;
    if (diff < 0) return; // время вышло
    setDiff([
      Math.floor(diff / 86400),
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ]);
  }, [tick, finishTime]);

  useEffect(() => {
    const timerID = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerID);
  }, [tick]);

  return (
    <div className={s.counterPage}>
      <div className={s.counter_item}>
        <p className={s.counter_number}>{diffDays}</p>
        <div className={s.counter_title}>
          <p>Days</p>
        </div>
      </div>
      <span className={s.counter_points}>:</span>
      <div className={s.counter_item}>
        <p className={s.counter_number}>{diffH.toString().padStart(2, "0")}</p>
        <div className={s.counter_title}>
          <p>Hours</p>
        </div>
      </div>
      <span className={s.counter_points}>:</span>
      <div className={s.counter_item}>
        <p className={s.counter_number}>{diffM.toString().padStart(2, "0")}</p>
        <div className={s.counter_title}>
          <p>Minutes</p>
        </div>
      </div>
      <span className={s.counter_points}>:</span>
      <div className={s.counter_item}>
        <p className={s.counter_number}>{diffS.toString().padStart(2, "0")}</p>
        <div className={s.counter_title}>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};
