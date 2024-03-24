import Image from "next/image";

// Componentes
import { ScreenCandidate } from "./components/screenCandidate/screenCandidate";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import DownStrip from "./components/DownStrip/DownStrip";
import Agenda from "./components/Agenda/Agenda";
import Propostas from "./components/Propostas/Propostas";


export default function Home() {
  return (
    <>
      <ScreenCandidate />

      <DownStrip />

      <Propostas />

      <Depoimentos />

      <Agenda />

      <NewsLetter />

    </>
  );
}
