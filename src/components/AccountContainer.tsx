import { FunctionComponent } from "react";
import styles from "./AccountContainer.module.css";

const AccountContainer: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <img className={styles.groupChild} alt="" src="/group-1847.svg" />
      <div className={styles.yourAccountParent}>
        <div className={styles.yourAccount}>Your Account</div>
        <div className={styles.yourDashboard}>Your Dashboard</div>
        <div className={styles.yourApplications}>Your Applications</div>
      </div>
      <div className={styles.smallerButton}>
        <div className={styles.smallerButtonChild} />
        <div className={styles.smaller}>Help Center</div>
      </div>
    </div>
  );
};

export default AccountContainer;
