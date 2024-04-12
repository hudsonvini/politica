import { fontSecundaria } from "@/app/fonts";
import style from "./Propostas.module.css";

function PropostasText(props) {
  const { icon, title, subtitle, description } = props;
  return (
    <article className={style.card}>
      {/* Icon */}
      <div className={style.areaIcon}>{icon}</div>
      {/* Area Information */}
      <div className={style.areaInformation}>
        <span>{title}</span>
        <h3>{subtitle}</h3>
        <p className={fontSecundaria.className}>{description}</p>
      </div>
    </article>
  );
}
export default function Propostas() {
  return (
    <section className={style.container}>
      {/* grid Propostas */}
      <div className={style.gridProposta}>
        {/* card */}
        <PropostasText
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V207l-42.4 17H304 272c-8.8 0-16 7.2-16 16v32 24.2V304c0 .9 .1 1.7 .2 2.6c2.3 58.1 24.1 144.8 98.7 201.5c-5.8 2.5-12.2 3.9-18.9 3.9H240V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48V48zM80 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H176zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zM423.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8V461.7c68.2-33 91.5-99 95.4-149.7z" />
            </svg>
          }
          title="Na Segurança"
          subtitle="Decidi entrar na politica depois de ver tanta desigualdade onde eu vivia."
          description="Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa Civil da Presidência da República durante o governo do presidente Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores partidos políticos do Brasil"
        />
        <PropostasText
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
            </svg>
          }
          title="No Empreendedorismo"
          subtitle="Decidi entrar na politica depois de ver tanta desigualdade onde eu vivia."
          description="Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa Civil da Presidência da República durante o governo do presidente Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores partidos políticos do Brasil"
        />
        <PropostasText
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M352 0H608c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM480 200c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24V224c0-13.3-10.7-24-24-24zm24 184c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24V384zM480 40c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24V64c0-13.3-10.7-24-24-24zM32 96H288v64H248v64h40v96c-53 0-96 43-96 96v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V416c0-53-43-96-96-96V224H72V160H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm168 64H120v64h80V160z" />
            </svg>
          }
          title="Na Infraestrutura"
          subtitle="Decidi entrar na politica depois de ver tanta desigualdade onde eu vivia."
          description="Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa Civil da Presidência da República durante o governo do presidente Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores partidos políticos do Brasil"
        />
        <PropostasText
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
            </svg>
          }
          title="Na Educação"
          subtitle="Decidi entrar na politica depois de ver tanta desigualdade onde eu vivia."
          description="Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa Civil da Presidência da República durante o governo do presidente Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores partidos políticos do Brasil"
        />
      </div>
    </section>
  );
}
