import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./elements/Dropdown";
import Slider from "./elements/Slider";
import Link from "./elements/Link";
import Popup from "./elements/Popup";
import { generateWidgetData2, roundUpToTwoDecimals } from "./helpers";
import { calculateInterest } from "./domainLogic";
import "./app.css";

const App = () => {
  const [chosenCompanyType, setcompanyType] = useState("");
  const [chosenGoal, setGoal] = useState("");

  const fakeDB = [
    {
      companyType: "BV",
      goals: {
        Marketing: {
          minLoan: 5000,
          maxLoan: 250000,
          maxTimeInMonths: 36
        },
        Machines: {
          minLoan: 5000,
          maxLoan: 1000000,
          maxTimeInMonths: 60
        },
        Equipment: {
          minLoan: 5000,
          maxLoan: 500000,
          maxTimeInMonths: 60
        }
      }
    },
    {
      companyType: "Eenmanszaak",
      goals: {
        Marketing: {
          minLoan: 5000,
          maxLoan: 250000,
          maxTimeInMonths: 36
        },
        Equipment: {
          minLoan: 5000,
          maxLoan: 250000,
          maxTimeInMonths: 60
        }
      }
    }
  ];

  const {
    goalOptions,
    companyTypeOptions,
    maxTime,
    maxLoan
  } = generateWidgetData2(chosenGoal, chosenCompanyType, fakeDB);

  const [chosenAmount, setAmount] = useState(maxLoan);
  const [chosenPeriod, setPeriod] = useState(maxTime);
  const [popupIsOpen, popupSetOpen] = useState(false);

  const checkIfPopUpShouldBeOpenend = () => {
    if (chosenGoal && chosenCompanyType) {
      popupSetOpen(true);
      return true;
    } else {
      return false;
    }
  };

  const Grid = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    &.footer {
      position: relative;
      margin-bottom: 0;
      align-items: center;
    }
  `;

  const Title = styled.h1`
    font-size: 4.7vh;
    text-align: center;
  `;

  const interest = calculateInterest(chosenAmount, chosenPeriod, maxTime);

  const successMessage = `
  Gefeliciteerd! Je kan ${chosenAmount} euro lenen. Hier zijn echter wel rente aan
  verbonden. De berekende rente voor jou zijn ${interest}%. Dat betekent dat je na
  ${chosenPeriod} maanden ${roundUpToTwoDecimals(
    chosenAmount * (interest / 100 + 1)
  )} terugbetaald!
  `;

  return (
    <>
      <div className="widgetWrapper">
        <Title>Stel je zakelijke financiering samen</Title>
        <Grid>
          <Dropdown
            label="Doel"
            options={goalOptions}
            placeholder="kies een doel"
            setValue={setGoal}
            value={chosenGoal}
          />
          <Dropdown
            label="Bedrijfsvorm"
            options={companyTypeOptions}
            placeholder="kies een vorm"
            setValue={setcompanyType}
            value={chosenCompanyType}
          />
        </Grid>
        <Slider
          label="Financiering"
          min={5000}
          max={maxLoan}
          valutaIcon="€"
          setValue={setAmount}
          step={1000}
          value={chosenAmount}
        />
        <Slider
          label="Looptijd (maanden)"
          min={3}
          max={maxTime}
          setValue={setPeriod}
          step={3}
          value={chosenPeriod}
        />
        <Grid className="footer">
          <Link label="Check of je in aanmerking komt" link="#" />
          <Link
            label="Direct aan de slag"
            link="#"
            primaryButton
            setOpen={checkIfPopUpShouldBeOpenend}
          />
        </Grid>
      </div>
      <Popup isOpen={popupIsOpen} setOpen={popupSetOpen}>
        <h1> Je maakt kans op een lening </h1>
        <p>{successMessage}</p>
        <Link label="Chill!!!" link="#" primaryButton setOpen={popupSetOpen} />
      </Popup>
    </>
  );
};

export default App;
