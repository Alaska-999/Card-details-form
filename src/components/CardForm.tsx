import React, {FC, FormEvent, useEffect, useState} from 'react';
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

    useEffect(() => {

    }, [])

    const [isCardSaved, setCardSaved] = useState(false)

    const [cardNumber, setCardNumber] = useState<string>
    ("0000 0000 0000 0000");
    const [cardHolder, setCardHolder] = useState<string>("Jane Appleseed");
    const [cardMonth, setCardMonth] = useState<string>('00');
    const [cardYear, setCardYear] = useState<string>('00');
    const [cardCVS, setCardCVS] = useState<string>("000");

    const [errorMessageName, setErrorMessageName] = useState<boolean>(false)
    const [errorMessageNumber, setErrorMessageNumber] = useState<boolean>(false)
    const [errorMessageNumberMonth, setErrorMessageNumberMonth] = useState<boolean>(false)
    const [errorMessageNumberYear, setErrorMessageNumberYear] = useState<boolean>(false)
    const [errorMessageNumberCVS, setErrorMessageNumberCVS] = useState<boolean>(false)

    const numberFormatCard = (e: any) => {
        const inputCardNumber = e.target.value
        const newNumberFormat = inputCardNumber
            .split('')
            .map((char: any, index: any) => (index % 4 === 3 ? `${char} ` : char))
            .join('');
        setCardNumber(newNumberFormat);
    }

    const cardNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setCardNumber('');
        } else {
            const onlyNumbers = /^[0-9]+$/;
            if (onlyNumbers.test(e.target.value)) {
                numberFormatCard(e);
                setErrorMessageNumber(false);
            } else {
                setErrorMessageNumber(true);
            }
        }
    }

    const cardHolderChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setCardHolder('');
        } else {
            const onlyLetters = /^[a-zA-Z\s]+$/;
            if (onlyLetters.test(e.target.value)) {
                setCardHolder(e.target.value);
                setErrorMessageName(false)
            } else {
                setErrorMessageName(true)
            }
        }
    }

    const cardMonthChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setCardMonth('');
        } else {
            const onlyNumbers = /^[0-9]+$/;
            if (onlyNumbers.test(e.target.value) && parseInt(e.target.value) >= 1 && parseInt(e.target.value) <= 12) {
                setCardMonth(e.target.value)
                setErrorMessageNumberMonth(false);
            } else {
                setErrorMessageNumberMonth(true);
            }
        }
    }

    const cardYearChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setCardYear('');
        } else {
            const onlyNumbers = /^[0-9]+$/;
            if (onlyNumbers.test(e.target.value) && parseInt(e.target.value) <= 27) {
                setCardYear(e.target.value)
                setErrorMessageNumberYear(false);
            } else {
                setErrorMessageNumberYear(true);
            }
        }
    }

    const cardCVSChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setCardCVS('');
        } else {
            const onlyNumbers = /^[0-9]+$/;
            if (onlyNumbers.test(e.target.value)) {
                setCardCVS(e.target.value)
                setErrorMessageNumberCVS(false);
            } else {
                setErrorMessageNumberCVS(true);
            }
        }
    }

    const submitHandler = (e: FormEvent) => {

        e.preventDefault()
        if (!errorMessageName && !errorMessageNumber && !errorMessageNumberMonth && !errorMessageNumberCVS && !errorMessageNumberYear) {
            setCardSaved(true)
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
                            error={errorMessageName}
                            required
                        />
                        {
                            errorMessageName && <ErrorMessage>Wrong format, only letters</ErrorMessage>
                        }

                    </Label>

                    <Label htmlFor='cardNumber'>CARD NUMBER
                        <Input
                            value={cardNumber}
                            type='text'
                            width='400px'
                            id='cardNumber'
                            placeholder='e.g. 1233 4567 6789 4567'
                            maxLength={16}
                            minLength={16}
                            onChange={cardNumberChangeHandler}
                            error={errorMessageNumber}
                            required
                        />
                        {
                            errorMessageNumber && <ErrorMessage>Wrong format, only numbers</ErrorMessage>
                        }
                    </Label>

                    <Line>
                        <Label htmlFor='expDate'>EXP. DATE (MM/YY)
                            <DateInputContainer>
                                <DateInputItem>
                                    <Input
                                        value={cardMonth}
                                        type='text'
                                        width='90px'
                                        placeholder='MM'
                                        id='expDate'
                                        maxLength={2}
                                        minLength={2}
                                        onChange={cardMonthChangeHandler}
                                        error={errorMessageNumberMonth}
                                        required
                                    />
                                    {
                                        errorMessageNumberMonth && <ErrorMessage>Wrong format</ErrorMessage>
                                    }
                                </DateInputItem>

                                <DateInputItem>
                                    <Input
                                        value={cardYear}
                                        type='text'
                                        width='90px'
                                        placeholder='YY'
                                        id='expDate'
                                        maxLength={2}
                                        minLength={2}
                                        onChange={cardYearChangeHandler}
                                        error={errorMessageNumberYear}
                                        required

                                    />

                                    {
                                        errorMessageNumberYear && <ErrorMessage>Wrong format</ErrorMessage>
                                    }
                                </DateInputItem>
                            </DateInputContainer>
                        </Label>

                        <Label htmlFor='cvs'>CVS
                            <Input
                                value={cardCVS}
                                width='190px'
                                type='text'
                                id='cvs'
                                placeholder='e.g. 123'
                                maxLength={3}
                                minLength={3}
                                onChange={cardCVSChangeHandler}
                                error={errorMessageNumberCVS}
                                required
                            />
                            {
                                errorMessageNumberCVS && <ErrorMessage>Wrong format</ErrorMessage>
                            }
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

  @media (max-width: 930px) {
    margin-left: 0;
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

const ErrorMessage = styled.div`
  display: block;
  color: #c50404;
  margin-bottom: 10px;
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