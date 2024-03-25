import style from './HistoriaCandidato.module.css'

export default function HistoriaCandidato() {
    return (
        <section className={style.container}>
            {/* Image Area */}
            <div className={style.imageArea}>
                <img src="./images/imagesHistoria/imageHistoriaCandidato.png" alt="Imagem do Candidato" />
            </div>

            <div className={style.containerInfo}>
                {/* Info Area */}
                <div className={style.infoArea}>
                    <h1>Quem é <span>Ciro Nogueira?</span></h1>
                    <p>
                        Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa Civil da Presidência da República durante o governo do presidente Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores partidos políticos do Brasil
                        <br /><br />
                        Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa Civil da Presidência da República durante o governo do presidente Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores partidos políticos do Brasil
                        <br /><br />
                        Ciro Nogueira é Senador pelo estado do Piauí. Nascido em 21 de novembro de 1968 em Teresina, Piauí, Ciro Nogueira é formado em Direito na PUC do Rio de Janeiro. Foi Ministro de Estado Chefe da Casa Civil da Presidência da República durante o governo do presidente Bolsonaro (2021-2022). Foi deputado federal por quatro mandatos e chegou ao Senado em 2011, sendo eleito novamente em 2018. Desde 2013, Ciro Nogueira preside o Progressistas, um dos maiores partidos políticos do Brasil
                    </p>
                </div>
            </div>
        </section>
    )
}