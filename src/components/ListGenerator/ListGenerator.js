import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { generateMainList } from "../../features/listSlice";
import { displayAlert } from "../../features/alertSlice";
import style from "./ListGenerator.module.css";

export const ListGenerator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstNum, setFirstNum] = useState("");
  const [lastNum, setLastNum] = useState("");

  const generateNewList = (e) => {
    e.preventDefault();
    if (!firstNum || !lastNum) {
      dispatch(
        displayAlert({
          type: "danger",
          msg: "Devi specificare un numero iniziale ed uno finale.",
        })
      );
      return;
    }
    if (firstNum > lastNum) {
      dispatch(
        displayAlert({
          type: "danger",
          msg: "Il numero iniziale deve essere minore del numero finale.",
        })
      );
      return;
    }
    dispatch(generateMainList({ firstNum, lastNum }));
    dispatch(
      displayAlert({
        type: "success",
        msg: "Hooray! You created list.",
      })
    );
    navigate("/overview");
  };

  const form = (
    <form onSubmit={generateNewList} className={style.generator}>
      <article className={style.textBox}>
        <h1 className={style.headline}>Crea la tua lista</h1>
        <p className={style.text}> Crea un numero iniziale ed uno finale per la tua lista delle domande. </p>
      </article>
      <div className={style.inputs}>
        <div className={`${style.singleInput} ${style.left}`}>
          <label htmlFor="firstNum">Inizio</label>
          <br />
          <input
            inputMode="numeric"
            type="number"
            name="firstNum"
            id="firstNum"
            step="1"
            min="1"
            max="200"
            placeholder="1"
            value={firstNum}
            onChange={(e) => setFirstNum((prev) => Number(e.target.value))}
            className={style.inputBox}
          />
        </div>
        <div className={style.singleInput}>
          <label htmlFor="lastNum">Fine</label>
          <br />
          <input
            inputMode="numeric"
            type="number"
            name="lastNum"
            id="lastNum"
            step="1"
            min="1"
            max="200"
            placeholder="20"
            value={lastNum}
            onChange={(e) => setLastNum((prev) => Number(e.target.value))}
            className={style.inputBox}
          />
        </div>
      </div>
      <button className={style.submitBtn} type="submit"> Crea lista </button>
    </form>
  );

  return form;
};