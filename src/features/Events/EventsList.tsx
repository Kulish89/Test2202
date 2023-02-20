import s from "./Events.module.css";
import { Event } from "./Event/Event";
import hawaiiImg from "../../assets/images/hawaii-party.png";
import mafiaImg from "../../assets/images/mafia-image.png";
import partyImg from "../../assets/images/party-image.png";
import beachImg from "../../assets/images/beach-image.png";
import homeImg from "../../assets/images/home-image.png";
import networkImg from "../../assets/images/network-image.png";
import systemImg from "../../assets/images/system-image.png";
import clientImg from "../../assets/images/client-image.png";
import { useState } from "react";

export type EventType = {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
};

const eventsArray = [
  {
    id: "01",
    name: "Hawaiian party",
    date: "13.02.2023",
    description: "description",
    image: hawaiiImg,
  },
  {
    id: "02",
    name: "Мafia party",
    date: "25.03.2023",
    description: "description",
    image: mafiaImg,
  },
  {
    id: "03",
    name: "Party",
    date: "07.03.2023",
    description: "description",
    image: partyImg,
  },
  {
    id: "04",
    name: "Party on the beach",
    date: "09.05.2023",
    description: "description",
    image: beachImg,
  },
  {
    id: "05",
    name: "Home Security",
    date: "06.06.2023",
    description: "description",
    image: homeImg,
  },
  {
    id: "06",
    name: "Network Design & Implementation",
    date: "07.07.2023",
    description: "description",
    image: networkImg,
  },
  {
    id: "07",
    name: "System Design & Engineering",
    date: "03.09.2023",
    description: "description",
    image: systemImg,
  },
  {
    id: "08",
    name: "Client Care Plans",
    date: "13.10.2023",
    description: "description",
    image: clientImg,
  },
];

export const EventsList = () => {
  const [activeEvent, setActiveEvent] = useState("01");

  const onClickActiveEventHandler = (id: string) => {
    setActiveEvent(id);
  };

  return (
    <div className={s.eventsList_wrapper}>
      {eventsArray.map((ev, index) => {
        return (
          <Event
            event={ev}
            key={index}
            isActive={ev.id === activeEvent}
            setActive={onClickActiveEventHandler}
          />
        );
      })}
    </div>
  );
};
