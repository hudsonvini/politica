import { fontSecundaria } from "@/app/fonts";
import style from "./Agenda.module.css";

function AgendaCard(props) {
  const { date, title, time, location } = props;
  return (
    <article className={style.card}>
      {/* Data Area */}
      <div className={style.dataArea}>{date}</div>

      {/* Information area */}
      <div className={style.informationArea}>
        <h3>{title}</h3>

        <div className={style.inferiorInformation}>
          {/* Spot */}
          <span className={`${style.spot} ${fontSecundaria.className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
            <p>{time}</p>
          </span>
          {/* Spot */}
          <span className={`${style.spot} ${fontSecundaria.className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <p>{location}</p>
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Agenda() {
  return (
    <section className={style.container}>
      {/* Title */}
      <h2 className={style.title}>Agenda</h2>
      {/* Area Agenda */}
      <div className={style.areaAgenda}>
        <AgendaCard
          date="14"
          title="Entrevista na radio bandeirantes"
          time="14:00"
          location="Teresina, Piauí"
        />
      </div>
    </section>
  );
}
