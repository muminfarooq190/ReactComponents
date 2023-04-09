import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./NameFormContainer.module.css";

type NameFormContainerType = {
  firstName?: string;
  selectInput?: string;

  /** Style props */
  propLeft?: Property.Left;
  propTop?: Property.Top;
  propBackgroundColor?: Property.BackgroundColor;
};

const NameFormContainer: FunctionComponent<NameFormContainerType> = ({
  firstName,
  selectInput,
  propLeft,
  propTop,
  propBackgroundColor,
}) => {
  const groupDivStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const dropdownNoLabelStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.firstNameParent} style={groupDivStyle}>
      <div className={styles.firstName}>{firstName}</div>
      <div className={styles.dropdownNoLabel} style={dropdownNoLabelStyle}>
        <div className={styles.colorBg} />
        <div className={styles.selectInput}>{selectInput}</div>
        <img
          className={styles.featherChevronDown}
          alt=""
          src="/feather--chevrondown1.svg"
        />
      </div>
    </div>
  );
};

export default NameFormContainer;
