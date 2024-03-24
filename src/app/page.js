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


export default function Home() {
  return (
    <>
      {/* Render the ScreenCandidate component */}
      <ScreenCandidate />

      {/* Render the DownStrip component */}
      <DownStrip />

      {/* Render the BannerYellow component */}
      <BannerOne />

      {/* Render the SecondBanner component */}
      <SecondBanner />

      {/* Render the Propostas component */}
      <Propostas />

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
