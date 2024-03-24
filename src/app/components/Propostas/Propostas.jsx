import style from './Propostas.module.css'

export default function Propostas() {
    return (
        <section className={style.container}>
            {/* Title */}
            <h2 className={style.title}>Proposta</h2>
            
            {/* grid Propostas */}
            <div className={style.gridProposta}>
                {/* card */}
                <article className={style.card}>
                    {/* Icon */}
                    <div className={style.areaIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V207l-42.4 17H304 272c-8.8 0-16 7.2-16 16v32 24.2V304c0 .9 .1 1.7 .2 2.6c2.3 58.1 24.1 144.8 98.7 201.5c-5.8 2.5-12.2 3.9-18.9 3.9H240V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48V48zM80 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H176zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zM423.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8V461.7c68.2-33 91.5-99 95.4-149.7z"/></svg>
                    </div>
                    {/* Area Information */}
                    <div className={style.areaInformation}>
                        <span>Segurança</span>
                        <h3>Decidi entrar na politica depois de ver tanta desigualdade onde eu vivia.</h3>

                        <p>Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa Civil da Presidência da República durante o governo do presidente Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores partidos políticos do Brasil</p>
                    </div>
                </article>

                {/* card */}
                <article className={style.card}>
                    {/* Icon */}
                    <div className={style.areaIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V207l-42.4 17H304 272c-8.8 0-16 7.2-16 16v32 24.2V304c0 .9 .1 1.7 .2 2.6c2.3 58.1 24.1 144.8 98.7 201.5c-5.8 2.5-12.2 3.9-18.9 3.9H240V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48V48zM80 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H176zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zM423.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8V461.7c68.2-33 91.5-99 95.4-149.7z"/></svg>
                    </div>
                    {/* Area Information */}
                    <div className={style.areaInformation}>
                        <span>Segurança</span>
                        <h3>Decidi entrar na politica depois de ver tanta desigualdade onde eu vivia.</h3>

                        <p>Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa Civil da Presidência da República durante o governo do presidente Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores partidos políticos do Brasil</p>
                    </div>
                </article>

                {/* card */}
                <article className={style.card}>
                    {/* Icon */}
                    <div className={style.areaIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V207l-42.4 17H304 272c-8.8 0-16 7.2-16 16v32 24.2V304c0 .9 .1 1.7 .2 2.6c2.3 58.1 24.1 144.8 98.7 201.5c-5.8 2.5-12.2 3.9-18.9 3.9H240V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48V48zM80 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H176zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zM423.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8V461.7c68.2-33 91.5-99 95.4-149.7z"/></svg>
                    </div>
                    {/* Area Information */}
                    <div className={style.areaInformation}>
                        <span>Segurança</span>
                        <h3>Decidi entrar na politica depois de ver tanta desigualdade onde eu vivia.</h3>

                        <p>Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa Civil da Presidência da República durante o governo do presidente Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores partidos políticos do Brasil</p>
                    </div>
                </article>

                {/* card */}
                <article className={style.card}>
                    {/* Icon */}
                    <div className={style.areaIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V207l-42.4 17H304 272c-8.8 0-16 7.2-16 16v32 24.2V304c0 .9 .1 1.7 .2 2.6c2.3 58.1 24.1 144.8 98.7 201.5c-5.8 2.5-12.2 3.9-18.9 3.9H240V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.5 0-48-21.5-48-48V48zM80 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H80zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM64 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM176 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H176zm80 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16zM423.1 225.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8V461.7c68.2-33 91.5-99 95.4-149.7z"/></svg>
                    </div>
                    {/* Area Information */}
                    <div className={style.areaInformation}>
                        <span>Segurança</span>
                        <h3>Decidi entrar na politica depois de ver tanta desigualdade onde eu vivia.</h3>

                        <p>Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa Civil da Presidência da República durante o governo do presidente Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores partidos políticos do Brasil</p>
                    </div>
                </article>
            </div>
        </section>
    )
}