import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAllLists, generateNewListFromMistakes } from "../../features/listSlice";
import { removeAlert, displayAlert } from "../../features/alertSlice";

import style from "./PopUp.module.css";

export const PopUp = ({ setIsPopupOpen, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleYes = () => {
    dispatch(removeAlert()); // per gestire situazioni molto rare in cui l'alert fornisce un messaggio che potrebbe non apparire nella pagina delle impostazioni
    
    if (type === "new") {
      dispatch(resetAllLists());
      navigate("/setup");
    } else if (type === "mistakes") {
      dispatch(generateNewListFromMistakes());
      dispatch(
        displayAlert({
          type: "success",
          msg: "Una nuova lista derivante dagli errori è stata creata!",
        })
      );
      navigate("/overview");
    } else if (type === "home") {
      dispatch(resetAllLists());
      navigate("/");
    }
  };
  const handleNo = () => setIsPopupOpen(false);
  const qNew = <p>Creare una nuova lista sovrascriverà quella corrente.</p>;
  const qMistakes = <p>Creare una lista derivante dagli errori sovrascriverà i dati correnti.</p>;
  const qHome = <p>Andare alla Homepage causerà la perdita dei dati attuali.</p>;

  return (
    <div className={style.blurredBg}>
      <div className={style.popUp}>
        <h1>Sei sicuro/a?</h1>
        {type === "new" && qNew}
        {type === "mistakes" && qMistakes}
        {type === "home" && qHome}
        <section className={style.btns}>
          <button className={style.no} onClick={() => handleNo()}>
            Cancella
          </button>
          <button className={style.yes} onClick={() => handleYes()}>
            Ok
          </button>
        </section>
      </div>
    </div>
  );
};