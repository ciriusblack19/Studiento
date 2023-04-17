import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIndividualNum, selectMainList, selectRolledList } from "../../features/listSlice";
import { displayAlert } from "../../features/alertSlice";
import style from "./Singleton.module.css";

import plus from "../../resources/plus.svg";

export const Singleton = () => {
  const [individualNum, setIndividualNum] = useState("");
  const dispatch = useDispatch();
  const mainList = useSelector(selectMainList);
  const rolledList = useSelector(selectRolledList);

  const addNumberToTheList = (e) => {
    e.preventDefault();
    // controllare se il numero individuale è già presente nelle liste
    let isIndNumInTheList = false;
    mainList.forEach((item) => {
      if (item.number === individualNum) {
        isIndNumInTheList = true;
      }
    });
    rolledList.forEach((item) => {
      if (item.number === individualNum) {
        isIndNumInTheList = true;
      }
    });
    if (isIndNumInTheList === true) {
      dispatch(
        displayAlert({
          type: "danger",
          msg: `Il numero ${individualNum} è già presente nella lista.`,
        })
      );
      return;
    }
    // controllare se l'utente ha inserito un valore corretto
    if (individualNum === "") {
      dispatch(
        displayAlert({
          type: "danger",
          msg: "Inserisci un valore valido.",
        })
      );
      return;
    }
    // controllare se il numero è compreso tra 1 e 200
    if (individualNum < 1 || individualNum > 200) {
      dispatch(
        displayAlert({
          type: "danger",
          msg: "Il numero deve essere compreso tra 1 to 200.",
        })
      );
      return;
    }
    // se tutto è ok, invia il numero individuale all'archivio:
    dispatch(addIndividualNum({ individualNum }));
    dispatch(
      displayAlert({
        type: "success",
        msg: `Il numero ${individualNum} è stato aggiunto alla lista.`,
      })
    );
    setIndividualNum("");
  };

  const form = (
    <form onSubmit={addNumberToTheList} className={style.formular}>
      <input
        inputMode="numeric"
        type="number"
        name="individualNum"
        id="individualNum"
        min="1"
        max="200"
        placeholder="1"
        value={individualNum}
        onChange={(e) => setIndividualNum((prev) => Number(e.target.value))}
        className={style.formInput}
      />
      <button className={style.add} onClick={(e) => addNumberToTheList(e)}>
        <img src={plus} alt="add" />
      </button>
    </form>
  );

  return (
    <>
      <p className={style.text}>Aggiungi un numero</p>
      {form}
    </>
  );
};