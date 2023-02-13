import React, {FC, useCallback, useState} from 'react';
import styled from "styled-components";
import Cards from "./Cards";
import Form from "./CardForm";

const Content: FC = () => {

    const [cardNumber, setCardNumber] = useState<string>("0000 0000 0000 0000");
    const [cardHolder, setCardHolder] = useState<string>("");
    const [cardMonth, setCardMonth] = useState<string>('01');
    const [cardYear, setCardYear] = useState<string>('23');
    const [cardCVS, setCardCVS] = useState<string>("");

    const cardData = useCallback(
        (
            number: string,
            holder: string,
            month: string,
            year: string,
            cvs: string
        ) => {
            setCardNumber(number);
            setCardHolder(holder);
            setCardMonth(month);
            setCardYear(year);
            setCardCVS(cvs);
        },
        []
    );

    return (
        <Wrapper>
            <Container>
                <Cards cardNumber={cardNumber}
                       cardHolder={cardHolder}
                       cardMonth={cardMonth}
                       cardYear={cardYear}
                       cardCVS={cardCVS}/>
                <Form cardData={cardData}/>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 90%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  //background-color: red;
  @media (max-width: 930px) {
    flex-direction: column;
  }
`

export default Content;