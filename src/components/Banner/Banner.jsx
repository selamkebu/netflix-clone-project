import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import netflixLogo from "../../assets/image/logo.png";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <img src={netflixLogo} alt="Netflix Logo" className={styles.logo} />

        <h1 className={styles.title}>Bridgerton</h1>

        <p className={styles.desc}>
          Inspired by Julia Quinn's bestselling novels, Bridgerton follows the
          eight close-knit siblings of the noble and powerful Bridgerton family
          as they navigate the high-stakes, glittering, and scandal-filled
          London social season during the Regency era.
        </p>

        <div className={styles.btns}>
          <button>
            <Play size={20} fill="currentColor" />
            Play
          </button>
          <button>
            <Info size={20} />
            My List
          </button>
        </div>
      </div>

      <div className={styles.fadeBox}></div>
    </div>
  );
}

export default Banner;
