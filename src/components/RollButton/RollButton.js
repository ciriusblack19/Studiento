import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rollDice } from "../../features/listSlice";
import { selectMainList, selectMistakesList } from "../../features/listSlice";
import { PopUp } from "../PopUp/PopUp";

import style from "./RollButton.module.css";

export const RollButton = () => {
  const dispatch = useDispatch();
  const mainList = useSelector(selectMainList);
  const mistakesList = useSelector(selectMistakesList);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [typeOfPopup, setTypeOfPopup] = useState("");

  // popup quando l'utente vuole tornare alla homepage
  const openPopUp = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <>
      {isPopupOpen && (
        <PopUp setIsPopupOpen={setIsPopupOpen} type={typeOfPopup} />
      )}
      {mainList.length > 0 ? (
        <div className={style.btnsContainer}>
          <button
            className={`${style.btn} ${style.greenBtn}`}
            onClick={() => dispatch(rollDice())}
          >
            Randomizza
          </button>
        </div>
      ) : (
        <div className={style.btnsContainer}>
          <button
            className={`${style.btn} ${style.noBgBtn}`}
            onClick={(e) => {
              setTypeOfPopup("home");
              openPopUp(e);
            }}
          >
            Torna alla Homepage
          </button>
          <button
            className={`${style.btn} ${style.lightGreenBtn}`}
            onClick={(e) => {
              setTypeOfPopup("new");
              openPopUp(e);
            }}
          >
            Crea una nuova lista
          </button>
          {mistakesList.length > 0 && (
            <button
              className={`${style.btn} ${style.greenBtn}`}
              onClick={(e) => {
                setTypeOfPopup("mistakes");
                openPopUp(e);
              }}
            >
              Nuova lista generata dagli errori
            </button>
          )}
        </div>
      )}
    </>
  );
};