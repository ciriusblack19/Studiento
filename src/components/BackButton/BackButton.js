import { useNavigate } from "react-router-dom";

import style from "./BackButton.module.css";
import backArrow from "../../resources/back-arrow/arrow-left@3x.png";

export const BackButton = ({ path, text }) => {
  const navigate = useNavigate();

  return (
    <button className={style.backBtn} onClick={() => navigate(`${path}`)}>
      <img src={backArrow} alt="back arrow" /> {text}
    </button>
  );
};