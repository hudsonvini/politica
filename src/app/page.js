import Image from "next/image";

// Componentes
import { ScreenCandidate } from "./components/screenCandidate/screenCandidate";
import Depoimentos from "./components/Depoimentos/Depoimentos";

export default function Home() {
  return (
    <>
      <ScreenCandidate />

      <Depoimentos />
    </>
  )
  ;
}
