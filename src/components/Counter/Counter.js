import { useSelector } from "react-redux";
import { selectMainList, selectRolledList, selectMistakesList } from "../../features/listSlice";

import style from "./Counter.module.css";

export const Counter = () => {
  const mainList = useSelector(selectMainList);
  const rolledList = useSelector(selectRolledList);
  const mistakesList = useSelector(selectMistakesList);

  return (
    <section className={style.counter}>
      <div className={style.box}>
        <h2>{mainList.length}</h2>
        <p>Rimanenti</p>
      </div>
      <div className={style.stripe}></div>
      <div className={style.box}>
        <h2>{rolledList.length}</h2>
        <p>Completati</p>
      </div>
      <div className={style.stripe}></div>
      <div className={style.box}>
        <h2>{mistakesList.length}</h2>
        <p>Errori</p>
      </div>
    </section>
  );
};