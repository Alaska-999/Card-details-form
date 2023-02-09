import React, {FC, useEffect, useState} from 'react';
// import styled from "styled-components";
// import Input from "./UI/Input";
//
// interface FormProps {
//     cardData: (number:string,
//                holder: string,
//                month: string,
//                year: string,
//                cvs: string) => void
// }
//
// const CardForm: FC<FormProps> = ({cardData}) => {
//
//     const useValidation = (value:string, validations:any) => {
//         const [isEmpty, setEmpty] = useState<boolean>(true)
//         const [minLengthError, setMinLengthError] = useState<boolean>(false)
//
//         useEffect(() :any  =>  {
//             for (const validation in validations) {
//                 switch (validation) {
//                     case 'minLength' :
//                         value.length < validations[validation] ?
//                             setMinLengthError(true) :  setMinLengthError(false)
//                         break
//                     case 'isEmpty':
//                         value ? setEmpty(false) : setEmpty(true)
//                         break
//                 }
//                 return {isEmpty, minLengthError}
//
//             }
//         }, [value])
//
//     }
//
//     const useInput = (initialValue:string, validations:any) => {
//         const [value, setValue] = useState<string>(initialValue)
//         const [isDirty, setIsDirty] = useState<boolean>(false)
//         const valid:any = useValidation(value, validations)
//         const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
//             setValue(e.target.value)
//         }
//         const onBlur = (e:React.FocusEvent) => {
//             setIsDirty(true)
//         }
//         return {
//             value,
//             onChange,
//             onBlur,
//             ...valid
//         }
//     }
//
//     const cardHolder = useInput('', {isEmpty: true, minLength: 3})
//     const cardNumber = useInput('', {isEmpty: true, minLength: 3})
//     const cardMonth = useInput('', {isEmpty: true, minLength: 3})
//     const cardYear = useInput('', {isEmpty: true, minLength: 3})
//     const cardCVS = useInput('', {isEmpty: true, minLength: 3})
//     cardData(cardNumber.value, cardHolder.value, cardMonth.value, cardYear.value, cardCVS.value)
//
//     return (
//         <Form>
//             <Label htmlFor='cardholder'>CARDHOLDER NAME
//                 <Input
//                     type='text'
//                     width='400px'
//                     id='cardholder'
//                     value={cardHolder.value}
//                     onChange={e => cardHolder.onChange(e)}
//                     onBlur = {e => cardHolder.onBlur(e)}
//                     placeholder='e.d. Jane Appleseed'
//                 />
//             </Label>
//
//             <Label htmlFor='cardNumber'>CARD NUMBER
//                 <Input
//                     value={cardNumber.value}
//                     type='text'
//                     width='400px'
//                     id='cardNumber'
//                     placeholder='e.g. 1233 4567 6789 4567'
//                     maxLength={16}
//                     onChange={e => cardNumber.onChange(e)}
//                     onBlur = {e => cardNumber.onBlur(e)}
//                 />
//             </Label>
//
//             <Line>
//                 <Label htmlFor='expDate'>EXP. DATE (MM/YY)
//                     <DateInputContainer>
//                         <DateInputItem>
//                             <Input
//                                 value={cardMonth.value}
//                                 type='string'
//                                 width='90px'
//                                 placeholder='MM'
//                                 id='expDate'
//                                 maxLength={2}
//                                 onChange={e => cardMonth.onChange(e)}
//                                 onBlur = {e => cardMonth.onBlur(e)}
//                             />
//                         </DateInputItem>
//
//                         <Input
//                             value={cardYear.value}
//                             type='string'
//                             width='90px'
//                             placeholder='YY'
//                             id='expDate'
//                             maxLength={2}
//                             onChange={e => cardYear.onChange(e)}
//                             onBlur = {e => cardYear.onBlur(e)}
//                         />
//
//                     </DateInputContainer>
//                 </Label>
//
//                 <Label htmlFor='cvs'>CVS
//                     <Input
//                         value={cardCVS.value}
//                         width='190px'
//                         type='text'
//                         id='cvs'
//                         placeholder='e.g. 123'
//                         maxLength={3}
//                         onChange={e => cardCVS.onChange(e)}
//                         onBlur = {e => cardCVS.onBlur(e)}
//                     />
//                 </Label>
//             </Line>
//             <ConfirmBtn type='submit'>Confirm</ConfirmBtn>
//         </Form>
//     );
// };
//
// const Form = styled.form`
//   margin-left: 100px;
//   //width: 450px;
// `
//
// const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   margin: 13px 0;
//   font-family: 'Space Grotesk', sans-serif;
//   font-size: 16px;
//
// `
//
// const Line = styled.div`
//   display: flex;
//   justify-content: space-between;
// `
//
// const ConfirmBtn = styled.button`
//   width: 100%;
//   padding: 10px 15px;
//   background-color: var(--colors-very-dark);
//   border-radius: var(--radii);
//   color: #fff;
//   font-family: 'Space Grotesk', sans-serif;
//   font-size: 18px;
//   cursor: pointer;
// `
// const DateInputContainer = styled.div`
//   display: flex;
// `
//
// const DateInputItem = styled.div`
//  margin-right: 10px;
// `
//
// export default CardForm;