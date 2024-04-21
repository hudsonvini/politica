import { fontPrincipal, fontSecundaria } from "@/app/fonts";
import style from "./NewsLetter.module.css";

export default function NewsLetter() {
  return (
    <section className={style.container}>
      {/* NewsLetter */}
      <div className={style.newsletter}>

        {/* Lead Capture area */}
        <div className={style.leadCaptureArea}>
          <h2>
            Mantenha se informado das <br /> próximas ações
          </h2>
          <p className={fontSecundaria.className}>
            Entre nessa jornada de torna o brasil um lugar melhor junto com a
            gente, estamos aqui para ouvir suas demandas
          </p>

          {/* Form Capture */}
          <form action="POST">
            <input type="e-mail" placeholder="Insira seu e-mail" className={fontPrincipal.className} />

            <button className={fontPrincipal.className} type="submit">Enviar</button>
          </form>
        </div>

        {/* Area Image */}
        <div className={style.areaImage}>
          {/* Image Candidate */}
          <div className={style.areaCandidateImg}>
            <img
              className={style.imageCandidate}
              src="./images/imagesNewsletter/cironogueira.png"
              alt="Imagem Candidato"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
