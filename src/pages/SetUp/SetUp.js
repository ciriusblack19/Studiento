import {useSelector} from "react-redux";
import { ListGenerator } from "../../components/ListGenerator/ListGenerator";
import { BackButton } from "../../components/BackButton/BackButton";
import { Alert } from "../../components/Alert/Alert";
import { selectAlert } from "../../features/alertSlice";

import logo from "../../resources/logo/logo@3x.png";
import style from "./SetUp.module.css";

const SetUp = () => {
  const { showAlert } = useSelector(selectAlert);

  return (
    <section className={style.setupPage}>
      <div className={style.top}>
        <BackButton path="/" text="Back" />
        <img src={logo} alt="logo" />
      </div>
      <ListGenerator />
      {showAlert && <Alert />}
    </section>
  );
};

export default SetUp;