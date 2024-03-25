// Componentes
import { ScreenCandidate } from "./components/screenCandidate/screenCandidate";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import DownStrip from "./components/DownStrip/DownStrip";
import Agenda from "./components/Agenda/Agenda";
import Propostas from "./components/Propostas/Propostas";
import { BannerOne } from "./components/BannerOne/BannerOne";
import { SecondBanner } from "./components/SecondBanner/SecondBanner";
import Footer from "./components/Footer/Footer";
import InfoCandidate from "./components/InfoCandidate/InfoCandidate";
import Separador from "./components/Seperador/Separador";
import Blog from "./components/Blog/Blog";

export default function Home() {
  return (
    <>
      {/* Render the ScreenCandidate component */}
      <ScreenCandidate
        slogan="Por um pais melhor" // Prop: slogan - The slogan of the candidate
        number="2222" // Prop: number - The number of the candidate
        logoImage="https://cironogueira.com.br/wp-content/uploads/2023/04/logo-1024x504.png" // Prop: logoImage - The URL of the candidate's logo image
        candidateImage="/images/imagesScreenCandidate/cironogueira.png" // Prop: candidateImage - The URL of the candidate's image
      />

      {/* Render the DownStrip component */}
      <DownStrip
        imgPiauiSrc="/images/imagesDownStrip/piaui.png" // Prop: imgPiauiSrc - The URL of the Piauí image
        imgPersonSrc="/images/imagesDownStrip/cironogueira.png" // Prop: imgPersonSrc - The URL of the candidate's image
        texts={[
          { text: "foco na", bold: "Saúde" },
          { text: "foco na", bold: "Segurança" },
          { text: "foco na", bold: "educação" },
        ]} // Prop: texts - An array of texts to be displayed in the DownStrip component
      />

      {/* Render the BannerYellow component */}
      <BannerOne />

      {/* Render the SecondBanner component */}
      <SecondBanner />

      {/* Render the InfoCandidate component */}
      <InfoCandidate />

      {/* Render the Propostas component */}
      <Propostas />

      {/* Render the Blog component */}
      <Blog />

      {/* Separator */}
      <Separador />

      {/* Render the Depoimentos component */}
      <Depoimentos />

      {/* Render the NewsLetter component */}
      <Agenda />

      <NewsLetter />

      {/* Render the Footer component */}
      <Footer />
    </>
  );
}
