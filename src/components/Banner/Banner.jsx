import React, { useEffect, useState } from "react";
import { Play, Info } from "lucide-react";
import styles from "../styles/banner.module.css";
import bannerLogo from "../../assets/image/logo.png";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <img src={bannerLogo} alt="Banner Logo" className={styles.logo} />

        {/* Title */}
        <h1 className={styles.title}>Bridgerton</h1>

        {/* Description */}
        <h1 className={styles.desc}>
          Inspired by Julia Quinn’s bestselling novels, Bridgerton follows the
          eight close-knit siblings of the noble and powerful Bridgerton family
          as they navigate the high-stakes, glittering, and scandal-filled
          London social season during the Regency era.
        </h1>

        {/* Buttons */}
        <div className={styles.btns}>
          <button>
            <Play size={30} />
            Play
          </button>
          <button>
            <Info size={30} />
            My List
          </button>
        </div>

        {/* Fading bottom */}
        <div className={styles.fadeBox}></div>
      </div>
    </div>
  );
}

export default Banner;
