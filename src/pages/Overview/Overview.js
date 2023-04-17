import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Singleton } from "../../components/Singleton/Singleton";
import { ListsOverview } from "../../components/ListsOverview/ListsOverview";

import { PopUp } from "../../components/PopUp/PopUp";
import { Alert } from "../../components/Alert/Alert";
import { selectAlert, removeAlert } from "../../features/alertSlice";

import logo from "../../resources/logo/logo@3x.png";
import backArrow from "../../resources/back-arrow/arrow-left@3x.png";
import style from "./Overview.module.css";

const Overview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showAlert } = useSelector(selectAlert);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // mantenere la navbar con box shadow quando si scrolla
  const [scrolled, setScrolled] = useState(false);
  const [bottom, setBottom] = useState("");

  useEffect(() => {
    const breakPoint = document
      .querySelector(".breakPoint")
      .getBoundingClientRect();
    setBottom(
      breakPoint.bottom -
        document.querySelector(".navbar").getBoundingClientRect().bottom
    );
  }, []);

  const handleScroll = () => {
    let container = document.querySelector(".container");
    if (container.scrollTop >= bottom) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // pop up quando l'utente vuole tornare alla pagina Setup
  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <section
      className={`${style.overviewPage} container`}
      onScroll={handleScroll}
    >
      {isPopupOpen && <PopUp setIsPopupOpen={setIsPopupOpen} type='new' />}
      {showAlert && <Alert />}

      <div className={`${style.top} ${scrolled && style.scrolling} navbar`}>
        <button onClick={(e) => openPopUp(e)} className={style.backBtn}>
          <img src={backArrow} alt="back arrow" /> Crea una nuova lista
        </button>
        <img className={style.icon} src={logo} alt="logo" />
      </div>
      <div className={`${style.infoAndForm} breakPoint`}>
        <article className={style.textBox}>
          <h1>La tua lista è pronta</h1>
          <p>
            Puoi aggiungere un altro numero che non è in linea o iniziare il tuo ripasso.
          </p>
        </article>
        <Singleton />
      </div>
      <div className={style.listsAndButton}>
        <ListsOverview />
        <div className={style.centerStudy}>
          <button
            className={style.studyBtn}
            onClick={() => {
              dispatch(removeAlert()); // Gestire rare situazioni in cui lo stato di alert ha un messaggio e questo messaggio apparirà nella pagina di setup 
              navigate("/roll");
            }}
          >
            Studia!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Overview;