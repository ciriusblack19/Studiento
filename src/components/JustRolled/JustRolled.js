import { useSelector, useDispatch } from "react-redux";
import { selectMainList, selectRolledList, selectMistakesList, toggleMistake } from "../../features/listSlice";
import style from "./JustRolled.module.css";

import markMistake from "../../resources/markMistake.svg";
import unmarkMistake from "../../resources/unmarkMistake.svg";
import hearts from "../../resources/hearts/hearts@3x.png";

export const JustRolled = () => {
  const dispatch = useDispatch();
  const mainList = useSelector(selectMainList);
  const rolledList = useSelector(selectRolledList);
  const mistakesList = useSelector(selectMistakesList);
  const rolledNum = rolledList[rolledList.length - 1]?.number;

  const btn = (
    <button
      className={style.btn}
      onClick={() => dispatch(toggleMistake({ rolledNum }))}
    >
      {mistakesList[mistakesList.length - 1]?.number !== rolledNum ? (
        <div>
          <p>Segna come errore</p> <img src={markMistake} alt="mark mistake" />
        </div>
      ) : (
        <div className={style.unmark}>
          <p>Rimuovi errore</p> <img src={unmarkMistake} alt="unmark mistake" />
        </div>
      )}
    </button>
  );

  return (
    <section className={style.justRolled}>
      {rolledList.length === 0 && <p className={style.text}>È ora di iniziare!</p>}
      {mainList.length > 0 && rolledList.length > 0 && (
        <p className={style.text}>Rispondi alla domanda</p>
      )}
      {mainList.length === 0 && (
        <>
          <img className={style.image} src={hearts} alt="kudos" />
          <h2 className={style.kudos}>Congratulazioni!</h2>
          <p className={style.text}>La tua ultima domanda è</p>
        </>
      )}
      <h1 className={style.bigNum}>{rolledNum}</h1>
      {rolledList.length > 0 && btn}
    </section>
  );
};