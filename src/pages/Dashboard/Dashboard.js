import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Singleton } from "../../components/Singleton/Singleton";
import { ListsOverview } from "../../components/ListsOverview/ListsOverview";
import { Counter } from "../../components/Counter/Counter";
import { JustRolled } from "../../components/JustRolled/JustRolled";
import { RollButton } from "../../components/RollButton/RollButton";
import { PopUp } from "../../components/PopUp/PopUp";
import { Alert } from "../../components/Alert/Alert";
import { selectAlert } from "../../features/alertSlice";

import style from "./Dashboard.module.css";
import logo from "../../resources/logo/logo@3x.png";
import backArrow from "../../resources/back-arrow/arrow-left@3x.png";

const Dashboard = () => {
  const { showAlert } = useSelector(selectAlert);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [widthOfOverview, setWidthOfOverview] = useState("");
  const [dimensions, setDimensions] = useState({ width: window.innerWidth });

  // I seguenti due useEffect e handleScroll forniscono una navbar responsive durante lo scrolling
  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth });
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    const rect = document.querySelector(".container").getBoundingClientRect();
    setWidthOfOverview(rect.width);
  }, [dimensions]);

  const handleScroll = () => {
    const container = document.querySelector(".container");
    if (container.scrollTop !== 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <section className={style.dashboardPage}>
      {showAlert && <Alert />}
      {isPopupOpen && <PopUp setIsPopupOpen={setIsPopupOpen} type="new" />}
      <section
        className={`${style.overviewPart} container`}
        onScroll={handleScroll}
      >
        <div
          className={`${style.top} ${scrolled && style.scrolling}`}
          style={{ width: widthOfOverview }}
        >
          <button onClick={(e) => openPopUp(e)} className={style.backBtn}>
            <img src={backArrow} alt="back arrow" /> Crea una nuova lista
          </button>
        </div>
        <div className={style.content}>
          <article className={style.textBox}>
            <h1>La tua lista è pronta</h1>
            <p> Puoi aggiungere un altro numero che non è presente nella riga o semplicemente iniziare il tuo ripasso. </p>
          </article>
          <Singleton />
          <ListsOverview />
        </div>
        <div
          className={style.linearTransition}
          style={{ width: widthOfOverview }}
        ></div>
      </section>
      <section className={style.rollPart}>
        <div className={style.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
        <JustRolled />
        <div className={style.counterAndBtn}>
          <Counter />
          <RollButton />
        </div>
      </section>
    </section>
  );
};

export default Dashboard;