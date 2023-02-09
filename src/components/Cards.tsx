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
  z-index: 10;

  @media (max-width: 930px) {
    width: 370px;
    height: 210px;
    position: relative;
    top: 210px;
  }

  @media (max-width: 500px) {
    width: 330px;
    height: 190px;
    position: relative;
    top: 170px;
  }
`

const BackCard = styled.div`
  width: 447px;
  height: 245px;
  margin-top: 30px;
  margin-left: 100px;
  border-radius: var(--radii);
  background-size: auto;
  background-image: url(${backCardBackground});
  background-position: center;
  box-shadow: var(--shadow);
  color: #fff;
  z-index: 1;

  @media (max-width: 1140px) {
    margin-left: 0;
  }
  
  @media (max-width: 930px) {
    width: 370px;
    height: 210px;
    position: relative;
    bottom: 120px;
    margin-left: 90px;
  }

  @media (max-width: 500px) {
    width: 330px;
    height: 190px;
    margin-left: 60px;
    bottom: 120px;
  }
`

const UpperRow = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 55px;

  @media (max-width: 1140px) {
    padding-bottom: 40px;
  } 
  
  @media (max-width: 500px) {
    padding-bottom: 20px;
  }
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

  @media (max-width: 1140px) {
    font-size: 20px;
  }
  
  @media (max-width: 930px) {
    font-size: 16px;
  }
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
  
  @media (max-width: 930px) {
    font-size: 14px;
  }
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
  
  @media (max-width: 930px) {
    margin-left: 300px;
    padding-top: 95px;
  }

  @media (max-width: 500px) {
    margin-left: 280px;
    padding-top: 82px;
  }
`


export default Cards;