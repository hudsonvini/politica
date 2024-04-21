import { fontSecundaria } from "@/app/fonts";
import style from "./Agenda.module.css";

function AgendaCard(props) {
  const { date, title, time, location } = props;
  return (
    <article className={style.card}>
      
      <div className={style.containerDataArea}>
        {/* Data Area */}
        <div className={style.dataArea}>{date}</div>
      </div>

      {/* Information area */}
      <div className={style.informationArea}>
        {/* Decorator */}
        <span className={style.decorator}></span>

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>
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
          title="Sabatina Rede Globo - Programa Hoje"
          time="13:00"
          location="Teresina, Piauí"
        />
        <AgendaCard
          date="24"
          title="Passeata pela liberade - Praça São Benedito"
          time="14:00"
          location="Parnaíba, Piauí"
        />
        <AgendaCard
          date="26"
          title="Sabatina de Pré-Candidatos - Jornal Agora"
          time="14:00"
          location="Campo Grande, São Paulo"
        />
        <AgendaCard
          date="01"
          title="Discurso de campanha e reunião com eleitorado"
          time="14:00"
          location="Campinas, São paulo"
        />
        <AgendaCard
          date="03"
          title="Marcha pela Democrácia"
          time="14:00"
          location="Teresina, Piauí"
        />
        <AgendaCard
          date="08"
          title="Campanha de apoio contra o Cancer de Mama"
          time="14:00"
          location="Uruaçu, Piauí"
        />
        <AgendaCard
          date="10"
          title="Entrevista na Radio Bandeirantes"
          time="14:00"
          location="Teresina, Piauí"
        />
        <AgendaCard
          date="11"
          title="Entrevista Jovem Pan"
          time="14:00"
          location="Lilopolís, Piauí"
        />
      </div>
    </section>
  );
}
