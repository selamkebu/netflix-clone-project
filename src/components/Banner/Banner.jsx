import React from "react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.contents}>
        {/* netflix image */}
        <img
          className={styles.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix logo"
        />

        {/* title */}
        <h1 className={styles.title}>Bridgerton</h1>

        {/* description */}
        <h1 className={styles.description}>
          Shondaland's Emmy-winning series brings Julia Quinn's novels to life,
          as eight siblings seek their perfect match amid London's scandals and
          soirées.
        </h1>

        {/* buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>

      {/* fading */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;
