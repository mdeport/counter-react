import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import stylesCompteur from "@/styles/Compteur.module.css";

const inter = Inter({ subsets: ["latin"] });
export default function Compteur() {
  const [count, setCount] = useState(0);
  function ajout1() {
    setCount(count + 1);
  }
  function enleve1() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  function ajout2() {
    setCount(count + 2);
  }
  function enleve2() {
    setCount(count - 2);
  }
  return (
    <>
      <main>
        <div className={stylesCompteur.titre}>
          <h1>Compteur</h1>
        </div>
        <div className={stylesCompteur.container}>
          <div className={stylesCompteur.texteCompteur}>
            <p>{count}</p>
          </div>
          <div className={stylesCompteur.ajoutbutton}>
            <button onClick={ajout1} className={stylesCompteur.Button}>
              Ajout +1
            </button>
            <button onClick={enleve1} className={stylesCompteur.Button}>
              Enleve -1
            </button>
            <button onClick={reset} className={stylesCompteur.Button}>
              Reset
            </button>
          </div>
          <div className={stylesCompteur.buttonAjout}>
            <button onClick={ajout2} className={stylesCompteur.Button}>
              Ajout +2
            </button>
            <button onClick={enleve2} className={stylesCompteur.Button}>
              Enleve -2
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
