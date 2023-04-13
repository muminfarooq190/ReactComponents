import { FunctionComponent } from "react";
import HelpContainer from "../components/HelpContainer";
import Header from "../components/Header";
import styles from "./ProxySelection.module.css";

const ProxySelection: FunctionComponent = () => {
  return (
    <div className={styles.proxySelection}>
      <img
        className={styles.featherChevronDown}
        alt=""
        src="/feather--chevrondown.svg"
      />
      <img
        className={styles.featherChevronRight}
        alt=""
        src="/feather--chevronright.svg"
      />
      <img
        className={styles.featherChevronRight1}
        alt=""
        src="/feather--chevronright.svg"
      />
      <img
        className={styles.featherChevronRight2}
        alt=""
        src="/feather--chevronright.svg"
      />
      <img
        className={styles.featherChevronRight3}
        alt=""
        src="/feather--chevronright.svg"
      />
      <img className={styles.info1Icon} alt="" src="/info-1.svg" />
      <img
        className={styles.featherChevronRight4}
        alt=""
        src="/feather--chevronright.svg"
      />
      <div className={styles.proxySelectionChild} />
      <div className={styles.proxySelectionItem} />
      <img className={styles.proxySelectionInner} alt="" src="/vector-31.svg" />
      <div className={styles.deskTopProfileCompletion} />
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
      <img className={styles.groupIcon} alt="" src="/group-18471.svg" />
      <div className={styles.yourAccountParent}>
        <div className={styles.yourAccount}>Your Account</div>
        <div className={styles.yourDashboard}>Your Dashboard</div>
        <div className={styles.yourApplications}>Your Applications</div>
      </div>
      <div className={styles.smallerButton}>
        <div className={styles.smallerButtonChild} />
        <div className={styles.smaller}>Help Center</div>
      </div>
      <b className={styles.hours}>2 hours</b>
      <div className={styles.goBackWrapper}>
        <div className={styles.goBack}>Go Back</div>
      </div>
      <div className={styles.cardDesktop1200}>
        <div className={styles.cardDesktop1200Child} />
      </div>
      <div className={styles.box} />
      <b className={styles.personalInformation}>Personal Information</b>
      <div className={styles.areYouApplying}>
        Are you applying for yourself or assisting someone else?
      </div>
      <img
        className={styles.buttonLargeOutlineIco}
        alt=""
        src="/button--large--outline--icononly1.svg"
      />
      <div className={styles.goBack1}>{`Go Back `}</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.smallerButtonParent}>
        <div className={styles.smallerButton1}>
          <div className={styles.smallerButtonItem} />
          <div className={styles.smaller}>Save and Continue</div>
        </div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.imAFamilyMemberOrOtherIParent}>
        <div className={styles.imAFamily}>
          I’m a family member or other individual assisting with the application
        </div>
        <div className={styles.radioButtonstruefalsefalse} />
      </div>
      <div className={styles.imApplyingForMyselfParent}>
        <div className={styles.imApplyingFor}>I’m applying for myself</div>
        <div className={styles.radioButtonsfalsetruefalse}>
          <div className={styles.activeDot1} />
        </div>
      </div>
      <HelpContainer
        dimensions="/group111.svg"
        dimensionsId="/client-logo211.svg"
        propTop="1111px"
      />
      <Header productIds="/client-logo3.svg" />
    </div>
  );
};

export default ProxySelection;
