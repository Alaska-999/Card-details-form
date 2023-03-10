import React, {FC, HTMLInputTypeAttribute} from 'react';
import styled from "styled-components";

interface InputProps {
    width: string;
    type: HTMLInputTypeAttribute;
    id: string;
    placeholder: string;
    value: string;
    maxLength: number;
    minLength: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: boolean
    required?: boolean;
}


const Input: FC<InputProps> = ({
                                   type,
                                   placeholder,
                                   width,
                                   onChange,
                                   maxLength,
                                   minLength,
                                   error,
                                   required
                               }) => {

    return (
        <InputField
            type={type}
            width={width}
            placeholder={placeholder}
            onChange={onChange}
            maxLength={maxLength}
            minLength={minLength}
            error={error}
            required={required}
        />
    );
};


const InputField = styled.input<{error: boolean}>`
  width: ${InputField => InputField.width};
  padding: 10px 15px;
  margin: 15px 0;
  border-radius: var(--radii);
  cursor: pointer;
  font-size: 18px;
  font-family: 'Space Grotesk', sans-serif;
  max-height: 46px;
  border: ${props => props.error ?
          ' 2px solid red' : '2px solid var(--colors-light)'};

  ::placeholder {
    color: var(--colors-light);
  }

  &:focus {
    border: 2px solid var(--colors-very-dark);
  }
  
  
 
`;


export default Input;