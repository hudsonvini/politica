import Image from "next/image";

// Componentes
import { ScreenCandidate } from "./components/screenCandidate/screenCandidate";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import NewsLetter from "./components/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <>
      <ScreenCandidate />

      <Depoimentos />

      <NewsLetter />
    </>
  );
}
