import style from './Post.module.css'

export default function Post() {
    return (
        <section className={style.container}>
            {/* Title Area */}
            <div className={style.TitleArea}>
                <h1>Ranking escolhe Ciro Nogueira como melhor parlamentar do Piauí</h1>
            </div>

            {/* Area Info */}
            <div className={style.areaInfo}>
                {/* Imagem */}
                <img src="https://cironogueira.com.br/wp-content/uploads/2023/12/senador-ciro-nogueira-piaui-progressistas.jpg" alt="Imagem da noticia" />

                {/* Data */}
                <span className={style.dataNoticia}>4 de dezembro de 2023</span>

                {/* Content Text */}
                <p className={style.contentText}>
                    O senador Ciro Nogueira (Progressistas) foi considerado o melhor parlamentar do Piauí no ranking “Excelência Parlamentar”. O levantamento foi elaborado pelo Ranking dos Políticos, organização não-governamental que compara políticos de todo Brasil. O objetivo da iniciativa é oferecer informações consolidadas para a população, levando em consideração, principalmente, o combate à corrupção, privilégios e desperdício da máquina pública.

                    Ciro afirmou estar honrado pelo reconhecimento, mas que sua maior motivação é o bem do Piauí. “O carinho e apoio dos piauienses me impulsionam a persistir no compromisso de levar mais melhorias para o nosso estado. Fico muito feliz com esse resultado, que também eleva o nome do Piauí no cenário nacional”, disse o senador.
                    Ciro Nogueira também ficou entre os 10 melhores parlamentares do Brasil no levantamento, alcançando o nono lugar entre os 584 congressistas da Câmara e do Senado.
                </p>
            </div>
        </section>
    )
}