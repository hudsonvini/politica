import style from './NewsLetter.module.css'

export default function NewsLetter() {
    return (
        <section className={style.container}>
            {/* NewsLetter */}
            <div className={style.newsletter}>
                {/* Lead Capture area */}
                <div className={style.leadCaptureArea}>
                    <h2>Mantenha se informado das <br /> próximas ações</h2>
                    <p>Entre nessa jornada de torna o brasil um lugar melhor junto com a gente, estamos aqui para ouvir suas demandas</p>

                    {/* Form Capture */}
                    <form action="POST">
                        <input type="e-mail" placeholder='Insira seu e-mail' />

                        <button type="submit">Enviar</button>
                    </form>
                </div>

                {/* Area Image */}
                <div className={style.areaImage}>
                    {/* Image Candidate */}
                    <img className={style.imageCandidate} src="./images/imagesNewsletter/cironogueira.png" alt="Imagem Candidato" />
                    {/* Image Bandeira */}
                    <div className={style.areaIamgebandeira}>
                        <img src="./images/imagesNewsletter/bandeiraPiaui.jpg" alt="Estado do candidato" />
                    </div>
                </div>
            </div>

        </section>
    )
}
