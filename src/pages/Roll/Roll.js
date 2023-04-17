import { Counter } from "../../components/Counter/Counter";
import { JustRolled } from "../../components/JustRolled/JustRolled";
import { RollButton } from "../../components/RollButton/RollButton";
import { BackButton } from "../../components/BackButton/BackButton";

import style from "./Roll.module.css";
import logo from "../../resources/logo/logo@3x.png";

const Roll = () => {

  return (
    <section className={style.rollPage}>
      <div className={style.top}>
        <BackButton path="/overview" text="List overview" />
        <img src={logo} alt="logo" />
      </div>
      <JustRolled />
      <div className={style.counterAndBtn}>
        <Counter />
        <RollButton />
      </div>
    </section>
  );
};

export default Roll;