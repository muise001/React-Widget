import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import Dropdown from "./elements/Dropdown";
import Slider from "./elements/Slider";
import Link from "./elements/Link";
import Popup from "./elements/Popup"
import { generateWidgetData, calculateInterest } from "./helpers";
import './app.css';

const App = () => {

  const [chosenCompanyType, setcompanyType] = useState("")
  const [chosenGoal, setGoal] = useState("")

  const fakeDB = [
    {
      companyType: "BV",
      goals : {
        Marketing: {
          minLoan: 5000,
          maxLoan: 250000,
          maxTimeInMonths: 36
        },
        Equipment: {
          minLoan: 5000,
          maxLoan: 500000,
          maxTimeInMonths: 60
        }
      }
    },
    {
      companyType : "Eenmanszaak",
      goals : {
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
  ]
  const { goalOptions, companyTypeOptions, maxTime, maxLoan } = generateWidgetData(chosenGoal, chosenCompanyType, fakeDB)

  const [chosenAmount, setAmount] = useState(maxLoan)
  const [chosenPeriod, setPeriod] = useState(maxTime)
  const [popupIsOpen, popupSetOpen] = useState(false)

  console.log(popupIsOpen);

  const WidgetWrapper = styled.div`
  width: 80vh;
  height: 80vh;
  padding: 4vh;
  position: fixed;
  background: white;
  border-radius: 20px;
  left: 50%;
  top: 50%;
  margin: -40vh;
  box-shadow: 0px 11px 73px -12px #a0a0a0;;
  `

  const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  &.footer {
    position: relative;
    margin-bottom: 0;
    align-items: center;
  }
  `

  const Title = styled.h1`
  font-size: 4.7vh;
  text-align: center;
  `

  const interest = calculateInterest(chosenAmount, chosenPeriod, maxTime)

  const successMessage = `
  Gefeliciteerd! Je kan ${chosenAmount} euro lenen. Hier zijn echter wel rente aan
  verbonden. De berekende rente voor jou zijn ${interest}%. Dat betekent dat je na
  ${chosenPeriod} maanden ${chosenAmount * (interest / 100 + 1)} terugbetaald!
  `

  return (
    <>
      <WidgetWrapper>
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
          value={chosenAmount}
        />
        <Slider
          label="Looptijd (maanden)"
          min={3}
          max={maxTime}
          setValue={setPeriod}
          value={chosenPeriod}
        />
        <Grid className="footer">
          <Link label="Check of je in aanmerking komt" link="#"/>
          <Link label="Direct aan de slag" link="#" primaryButton setOpen={popupSetOpen}/>
        </Grid>
      </WidgetWrapper>
      <Popup isOpen={popupIsOpen} setOpen={popupSetOpen}>
        <h1> Je maakt kans op een lening </h1>
        <p>{successMessage}</p>
        <Link label="Chill!!!" link="#" primaryButton setOpen={popupSetOpen}/>
      </Popup>
    </>
  );
}

export default App;
