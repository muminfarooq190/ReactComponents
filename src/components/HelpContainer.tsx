import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./HelpContainer.module.css";

type HelpContainerType = {
  dimensions?: string;
  dimensionsId?: string;

  /** Style props */
  propTop?: Property.Top;
};

const HelpContainer: FunctionComponent<HelpContainerType> = ({
  dimensions,
  dimensionsId,
  propTop,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footerDesktop}>
        <div className={styles.footerDesktopChild} />
        <img className={styles.groupIcon} alt="" src={dimensions} />
        <div className={styles.footerDesktopItem} />
        <div className={styles.mainWebsiteContainer}>
          <p className={styles.mainWebsite}>{`Main Website  >`}</p>
          <p className={styles.mainWebsite}>{`5300 E. Paisano Drive `}</p>
          <p className={styles.mainWebsite}>El Paso, Texas 79905</p>
          <p className={styles.mainWebsite}>&nbsp;</p>
          <p className={styles.p}>&nbsp;</p>
        </div>
        <div className={styles.helpCenterContainer}>
          <p className={styles.mainWebsite}>{`Help Center >`}</p>
          <p className={styles.mainWebsite}>{`Contact Us  >`}</p>
          <p className={styles.mainWebsite}>{`TDD (915) 847-3737 >`}</p>
          <p className={styles.p}>{`(915) 849-3742 >`}</p>
        </div>
        <div className={styles.equalHousingOpportunityContainer}>
          <p className={styles.mainWebsite}>{`Equal Housing Opportunity  >`}</p>
          <p className={styles.mainWebsite}>{`Accessibility  >`}</p>
          <p className={styles.mainWebsite}>{`Non-Discrimination  >`}</p>
          <p className={styles.p}>{`Privacy & Terms of Use  >`}</p>
        </div>
        <b className={styles.getHelp}>{`Get Help & Support `}</b>
        <b className={styles.visitHome}>Visit HOME</b>
        <div className={styles.sepratorInsetPad24}>
          <div className={styles.sepratorInsetPad24Child} />
        </div>
        <div className={styles.sepratorInsetPad241}>
          <div className={styles.sepratorInsetPad24Child} />
        </div>
        <div className={styles.sepratorInsetPad242}>
          <div className={styles.sepratorInsetPad24Child} />
        </div>
        <b className={styles.legalInformation}>Legal Information</b>
        <div className={styles.wereAProud}>
          We’re a proud equal housing opportunity provider.
        </div>
        <img className={styles.pngaaa6Icon} alt="" src="/pngaaa-6@2x.png" />
        <div className={styles.smallWhiteButton}>
          <div className={styles.smallWhiteButtonChild} />
          <div className={styles.smallest}>Get Directions</div>
        </div>
        <div className={styles.housingOpportunityManagement}>
          ©2023 Housing Opportunity Management Enterprises
        </div>
      </div>
      <div className={styles.housingOpportunityManagementParent}>
        <b className={styles.housingOpportunityManagement1}>
          Housing Opportunity Management Enterprises
        </b>
        <img className={styles.clientLogoIcon} alt="" src={dimensionsId} />
      </div>
    </div>
  );
};

export default HelpContainer;
