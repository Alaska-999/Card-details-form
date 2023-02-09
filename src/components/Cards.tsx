import React, {FC} from 'react';
import styled from "styled-components";
import frontCardBackground from '../images/bg-card-front.png'
import backCardBackground from '../images/bg-card-back.png'


interface CardsProps {
    cardNumber: string,
    cardHolder: string,
    cardMonth: string,
    cardYear: string,
    cardCVS: string
}

const Cards: FC<CardsProps> = ({cardNumber, cardHolder, cardMonth, cardYear, cardCVS}) => {
    return (
        <div>
            <FrontCard>
                <UpperRow>
                    <BankIcon/>
                    <BankIconSmall/>
                </UpperRow>
                <LowerRow>
                    <CardNumber>{cardNumber}</CardNumber>
                    <CardInfo>
                        <OwnerName>{cardHolder.toUpperCase()}</OwnerName>
                        <ValidityPeriod>{cardMonth} / {cardYear}</ValidityPeriod>
                    </CardInfo>
                </LowerRow>
            </FrontCard>
            <BackCard>
                <CVS>{cardCVS}</CVS>
            </BackCard>
        </div>
    );
};

const FrontCard = styled.div`
  width: 447px;
  height: 245px;
  border-radius: var(--radii);
  background-size: auto;
  background-image: url(${frontCardBackground});
  box-shadow: var(--shadow);
  padding: 25px;
  color: #fff;
`

const BackCard = styled.div`
  width: 447px;
  height: 245px;
  margin-top: 30px;
  margin-left: 100px;
  border-radius: var(--radii);
  background-size: auto;
  background-image: url(${backCardBackground});
  box-shadow: var(--shadow);
  color: #fff;
`

const UpperRow = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 55px;
  //height: 50%;
`

const LowerRow = styled.div`
  height: 50%;
`

const BankIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #fff;
`

const BankIconSmall = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border: 1px solid #fff;
  margin-left: 15px;
`

const CardNumber = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
  letter-spacing: 5px;
`

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`

const OwnerName = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;

`

const ValidityPeriod = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
`
const CVS = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  letter-spacing: 3px;
  padding-top: 110px;
  margin-left: 350px;
`

export default Cards;