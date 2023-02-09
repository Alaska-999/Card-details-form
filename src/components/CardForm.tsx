import React, {FC, useState} from 'react';
import styled from "styled-components";
import Input from "./UI/Input";
import Submitted from "./Submitted";

interface FormProps {
    cardData: (number: string,
               holder: string,
               month: string,
               year: string,
               cvs: string) => void
}

const CardForm: FC<FormProps> = ({cardData}) => {

    const [isCardSaved, setCardSaved] = useState(false)

    const [cardNumber, setCardNumber] = useState<string>
    ("0000 0000 0000 0000");
    const [cardHolder, setCardHolder] = useState<string>("Jane Appleseed");
    const [cardMonth, setCardMonth] = useState<string>('00');
    const [cardYear, setCardYear] = useState<string>('00');
    const [cardCVS, setCardCVS] = useState<string>("000");

    const cardNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCardNumber(e.target.value)
    }
    const cardHolderChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCardHolder(e.target.value)
    }
    const cardMonthChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCardMonth(e.target.value)
    }
    const cardYearChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCardYear(e.target.value)
    }
    const cardCVSChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCardCVS(e.target.value)
    }

    const submitHandler = () => {
        if(cardNumber !== "0000 0000 0000 0000"
            && cardMonth !=='00'
            && cardYear !== '00'
            && cardCVS !== '000'
            && cardHolder !== 'Jane Appleseed'
        ) {
            setCardSaved(true)
        } else {
            return alert('Inputs cannot be blank')
        }
    }

    cardData(cardNumber, cardHolder, cardMonth, cardYear, cardCVS)

    return (
        <div>
            {isCardSaved ?
                <Submitted/>
                :

                <Form onSubmit={submitHandler}>
                    <Label htmlFor='cardholder'>CARDHOLDER NAME
                        <Input
                            type='text'
                            width='400px'
                            id='cardholder'
                            placeholder='e.d. Jane Appleseed'
                            value={cardHolder}
                            maxLength={21}
                            minLength={6}
                            onChange={cardHolderChangeHandler}
                        />

                    </Label>

                    <Label htmlFor='cardNumber'>CARD NUMBER
                        <Input
                            value={cardNumber}
                            type='number'
                            width='400px'
                            id='cardNumber'
                            placeholder='e.g. 1233 4567 6789 4567'
                            maxLength={16}
                            minLength={16}
                            onChange={cardNumberChangeHandler}
                        />
                    </Label>

                    <Line>
                        <Label htmlFor='expDate'>EXP. DATE (MM/YY)
                            <DateInputContainer>
                                <DateInputItem>
                                    <Input
                                        value={cardMonth}
                                        type='number'
                                        width='90px'
                                        placeholder='MM'
                                        id='expDate'
                                        maxLength={2}
                                        minLength={2}
                                        onChange={cardMonthChangeHandler}
                                    />
                                </DateInputItem>

                                <Input
                                    value={cardYear}
                                    type='number'
                                    width='90px'
                                    placeholder='YY'
                                    id='expDate'
                                    maxLength={2}
                                    minLength={2}
                                    onChange={cardYearChangeHandler}
                                />

                            </DateInputContainer>
                        </Label>

                        <Label htmlFor='cvs'>CVS
                            <Input
                                value={cardCVS}
                                width='190px'
                                type='number'
                                id='cvs'
                                placeholder='e.g. 123'
                                maxLength={3}
                                minLength={3}
                                onChange={cardCVSChangeHandler}
                            />
                        </Label>
                    </Line>

                    <ConfirmBtn type='submit'>Confirm</ConfirmBtn>
                </Form>
            }
            </div>

    );

};

const Form = styled.form`
  margin-left: 100px;
  
  @media (max-width: 1140px) {
    margin-left: 100px;
  }

  @media (max-width: 1024px) {
    margin-left: 40px;
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 13px 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
`

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`

const ConfirmBtn = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: var(--colors-very-dark);
  border-radius: var(--radii);
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  cursor: pointer;
`
const DateInputContainer = styled.div`
  display: flex;
`

const DateInputItem = styled.div`
  margin-right: 10px;
`

export default CardForm;