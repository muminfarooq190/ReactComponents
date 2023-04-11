import { FunctionComponent } from "react";
import styles from "./Header.module.css";

type HeaderType = {
  productIds?: string;
};

const Header: FunctionComponent<HeaderType> = ({ productIds }) => {
  return (
    <div className={styles.topNavigation}>
      <div className={styles.secondaryNav}>
        <div className={styles.component4}>
          <div className={styles.component4Child} />
          <div className={styles.help}>Help</div>
          <div className={styles.logIn}>Log In</div>
          <div className={styles.enEspaol}>En Español</div>
          <img className={styles.fileText3Icon} alt="" src="/filetext-31.svg" />
          <img className={styles.fileText4Icon} alt="" src="/filetext-42.svg" />
          <img
            className={styles.helpCircle3Icon}
            alt=""
            src="/helpcircle-31.svg"
          />
          <div className={styles.housingChoiceVoucherContainer}>
            <span className={styles.housingChoiceVoucherContainer1}>
              <span>{`Housing Authority `}</span>
              <span className={styles.ofThe}>of the</span>
              <span>{` City `}</span>
              <span className={styles.ofThe}>of</span>
              <span> El Paso</span>
            </span>
          </div>
          <div className={styles.formToggleOff}>
            <div className={styles.bg} />
            <div className={styles.activeDot}>
              <div className={styles.oval} />
              <div className={styles.oval2} />
            </div>
          </div>
        </div>
        <div className={styles.heresATimely}>
          Here’s a timely notification maybe about upcoming deadlines or
          something.
        </div>
        <div className={styles.espaol}>{`Español `}</div>
        <div className={styles.logOut}>Log Out</div>
        <div className={styles.about}>About</div>
        <div className={styles.bgParent}>
          <div className={styles.bg1} />
          <div className={styles.oval1} />
          <div className={styles.oval21} />
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.clientLogoIcon} alt="" src={productIds} />
        <div className={styles.appnameDesktopWrapper}>
          <div className={styles.appnameDesktop}>
            <b className={styles.appname}>HOME</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
