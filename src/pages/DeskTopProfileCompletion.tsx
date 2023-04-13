import { FunctionComponent } from "react";
import AccountContainer from "../components/AccountContainer";
import NameFormContainer from "../components/NameFormContainer";
import Header from "../components/Header";
import HelpContainer from "../components/HelpContainer";
import styles from "./DeskTopProfileCompletion1.module.css";

const DeskTopProfileCompletion1: FunctionComponent = () => {
  return (
    <div className={styles.deskTopProfileCompletion}>
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
      <div className={styles.deskTopProfileCompletionChild} />
      <div className={styles.deskTopProfileCompletionItem} />
      <img
        className={styles.deskTopProfileCompletionInner}
        alt=""
        src="/vector-31.svg"
      />
      <div className={styles.deskTopProfileCompletion1} />
      <img className={styles.groupIcon} alt="" src="/group-37402.svg" />
      <AccountContainer />
      <b className={styles.hours}>2 hours</b>
      <div className={styles.goBackWrapper}>
        <div className={styles.goBack}>Go Back</div>
      </div>
      <div className={styles.cardDesktop1200}>
        <div className={styles.cardDesktop1200Child} />
      </div>
      <div className={styles.box} />
      <div className={styles.groupDiv}>
        <div className={styles.inputParent}>
          <div className={styles.input}>
            <div className={styles.loremIpsum}>Eligible Citizen</div>
            <div className={styles.labelTop}>Citizenship Status *</div>
            <div className={styles.suffix}>
              <img
                className={styles.featherChevronDown1}
                alt=""
                src="/feather--chevrondown1.svg"
              />
            </div>
          </div>
          <div className={styles.input1}>
            <div className={styles.loremIpsum}>Spouse</div>
            <div className={styles.labelTop}>Relationship *</div>
            <div className={styles.suffix}>
              <img
                className={styles.featherChevronDown1}
                alt=""
                src="/feather--chevrondown1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.input}>
          <div className={styles.loremIpsum}>Eligible Citizen</div>
          <div className={styles.labelTop}>Is this Individual a Student? *</div>
          <div className={styles.suffix}>
            <img
              className={styles.featherChevronDown1}
              alt=""
              src="/feather--chevrondown1.svg"
            />
          </div>
        </div>
        <div className={styles.input1}>
          <div className={styles.loremIpsum}>No</div>
          <div className={styles.labelTop}>Is this Individual Disabled? *</div>
          <div className={styles.suffix}>
            <img
              className={styles.featherChevronDown1}
              alt=""
              src="/feather--chevrondown1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.input4}>
        <div className={styles.loremIpsum}>No</div>
        <div className={styles.labelTop4}>
          <p
            className={styles.willThisIndividual}
          >{`Will this Individual become a `}</p>
          <p className={styles.studentWithinThe}>
            Student within the next year? *
          </p>
        </div>
        <div className={styles.suffix}>
          <img
            className={styles.featherChevronDown1}
            alt=""
            src="/feather--chevrondown1.svg"
          />
        </div>
      </div>
      <div className={styles.input5}>
        <div className={styles.loremIpsum}>No</div>
        <div className={styles.labelTop4}>
          <p className={styles.willThisIndividual}>
            Is this individual subject to a lifetime sex
          </p>
          <p className={styles.studentWithinThe}>registration? *</p>
        </div>
        <div className={styles.suffix}>
          <img
            className={styles.featherChevronDown1}
            alt=""
            src="/feather--chevrondown1.svg"
          />
        </div>
      </div>
      <div className={styles.input6}>
        <div className={styles.loremIpsum}>Male</div>
        <div className={styles.labelTop}>Gender *</div>
        <div className={styles.suffix}>
          <img
            className={styles.featherChevronDown1}
            alt=""
            src="/feather--chevrondown1.svg"
          />
        </div>
      </div>
      <b className={styles.enterYourPersonalContainer}>
        <p className={styles.willThisIndividual}>{`Enter your `}</p>
        <p className={styles.willThisIndividual}>personal information</p>
        <p className={styles.studentWithinThe}>{`{Name}`}</p>
      </b>
      <div className={styles.fieldsAreMandatory}>*Fields are mandatory.</div>
      <div className={styles.checkAnyRaces}>
        Check any races that apply for this individual. *
      </div>
      <div className={styles.groupParent}>
        <NameFormContainer
          firstName="First Name *"
          selectInput="David"
          propLeft="0px"
          propTop="0px"
          propBackgroundColor="#f5f5f9"
        />
        <NameFormContainer
          firstName="Middle Name"
          selectInput="Carlos"
          propLeft="354px"
        />
      </div>
      <NameFormContainer
        firstName="Phone Number *"
        selectInput="(310) 888-8889"
        propLeft="366px"
        propTop="768px"
        propBackgroundColor="#fff"
      />
      <NameFormContainer
        firstName="Social Security Number *"
        selectInput="XXX-XX-9999"
        propLeft="720px"
        propTop="768px"
      />
      <div className={styles.groupContainer}>
        <div className={styles.lastNameParent}>
          <div className={styles.lastNameContainer}>
            <span>Last Name</span>
            <span className={styles.span}> *</span>
          </div>
          <div className={styles.dropdownNoLabel}>
            <div className={styles.colorBg} />
            <div className={styles.selectInput}>Carlin</div>
            <img
              className={styles.featherChevronDown8}
              alt=""
              src="/feather--chevrondown1.svg"
            />
          </div>
        </div>
        <NameFormContainer
          firstName="Maiden Name, if applicable"
          selectInput="Maiden"
          propLeft="354px"
        />
      </div>
      <div className={styles.smallerButton}>
        <div className={styles.smallerButtonChild} />
        <div className={styles.smaller}>Save and Continue</div>
      </div>
      <img
        className={styles.buttonLargeOutlineIco}
        alt=""
        src="/button--large--outline--icononly1.svg"
      />
      <div className={styles.goBackTo}>Go Back To Dashboard</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.input7}>
        <div className={styles.loremIpsum}>July 19, 1984</div>
        <div className={styles.labelTop}>Date of Birth *</div>
        <div className={styles.suffix7}>
          <div className={styles.inputgroup1869Wrapper}>
            <img
              className={styles.inputgroup1869Icon}
              alt=""
              src="/inputgroup-1869.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.personalDetails}>Personal Details</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.personalDetails}>{`Race & Ethnicity`}</div>
      </div>
      <div className={styles.deskTopProfileCompletionChild1} />
      <div className={styles.checkBoxtruefalsefalsefalParent}>
        <div className={styles.checkBoxtruefalsefalsefal} />
        <div className={styles.americanIndianOr}>
          American Indian or Alaskan Native
        </div>
      </div>
      <div className={styles.checkBoxtruefalsefalsefalGroup}>
        <div className={styles.checkBoxtruefalsefalsefal} />
        <div className={styles.americanIndianOr}>Asian</div>
      </div>
      <div className={styles.checkBoxtruefalsefalsefalContainer}>
        <div className={styles.checkBoxtruefalsefalsefal} />
        <div className={styles.americanIndianOr}>Black or African American</div>
      </div>
      <div className={styles.checkBoxtruefalsefalsefalParent1}>
        <div className={styles.checkBoxtruefalsefalsefal} />
        <div className={styles.americanIndianOr}>
          Native Hawaiian of Pacific Islander
        </div>
      </div>
      <div className={styles.checkBoxtruefalsefalsefalParent2}>
        <div className={styles.checkBoxtruefalsefalsefal} />
        <div className={styles.americanIndianOr}>White or Caucasian</div>
      </div>
      <div className={styles.checkBoxtruefalsefalsefalParent3}>
        <div className={styles.checkBoxtruefalsefalsefal} />
        <div className={styles.americanIndianOr}>None of these</div>
      </div>
      <Header productIds="/client-logo21.svg" />
      <HelpContainer
        dimensions="/group11.svg"
        dimensionsId="/client-logo11.svg"
      />
    </div>
  );
};

export default DeskTopProfileCompletion1;
