import React from "react";
import { FocusCards } from "./ui/focus-cards";

const certificatCards = [
  { title: "Les Fondamentaux de la programmation", src: "/c6.png" },
  { title: "HTML Essential Training", src: "/c5.png" },
  { title: "L'essentiel des CSS", src: "/c3.png" },
   { title: "Introduction to python", src: "/c4.png" },
  { title: "Meta & NFT", src: "/c1.png" },
  { title: "Industry 4.0", src: "/c2.png" },
 { title: "HULT PRIZE", src: "/c9.png" },
 { title: "HULT PRIZE", src: "/c11.png" },
  { title: "ICR", src: "/c13.png" },
  { title: "IMC Talk", src: "/c8.jpg" },
  { title: "HACKTHON ART OF CODE", src: "/c10.png" },
  { title: "BAL des Projet ESPRIT", src: "/c12.png" },
];

function Certificat() {
  return (
    <div className="py-10">
      <h1 className="heading mb-8">
        My <span className="text-purple">Certificats</span>
      </h1>
      <FocusCards cards={certificatCards} />
    </div>
  );
}

export default Certificat;
