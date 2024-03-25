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
        slogan="Por um pais melhor"
        number="2222"
        logoImage="https://cironogueira.com.br/wp-content/uploads/2023/04/logo-1024x504.png"
        candidateImage="/images/imagesScreenCandidate/cironogueira.png"
      />

      {/* Render the DownStrip component */}
      <DownStrip />

      {/* Render the BannerYellow component */}
      <BannerOne />

      {/* Render the SecondBanner component */}
      <SecondBanner />

      {/* Render the InfoCandidate component */}
      <InfoCandidate />

      {/* Render the Propostas component */}
      <Propostas />

      {/* Separator */}
      <Separador />

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
