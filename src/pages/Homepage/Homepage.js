import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../resources/logo/logo-landing-page/Group 410@3x.png";
import style from "./Homepage.module.css";

const Homepage = () => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {showPopup && (
                <div className={style.blurredBg}>
                    <div className={style.popUp}>
                        <h1>Studiento est<br />mater studiorum.</h1>
                        <ol className={style.orderedList}>
                            <li>
                                <span>Crea una lista numerata</span> che simuli le tue domande d'esame
                            </li>
                            <li>
                                <span>Fatti una passeggiata</span> mentre noi{" "}
                                <span>randomizziamo</span> la tua lista, tutto quello che dovrai fare è mantenere la calma e <span>ripetere</span>.
                            </li>
                            <li><span>Non aggiornare la pagina!</span> O perderai la tua lista.</li>
                        </ol>
                        <div>
                            <button
                                className={style.gotIt}
                                onClick={() => setShowPopup(false)}
                            >
                                Capito!
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <section className={style.homepage}>
                <img src={logo} alt="logo" />
                <div className={style.interactions}>
                    <button className={style.btnHow} onClick={() => setShowPopup(true)}>
                        Come funziona
                    </button>
                    <button
                        className={style.btnStart}
                        onClick={() => navigate("/setup")}
                    >
                        Crea una lista
                    </button>
                    <p>Version 1.0.0</p>
                </div>
            </section>
        </>
    );
};

export default Homepage;