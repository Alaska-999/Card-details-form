import React, {FC, HTMLInputTypeAttribute, PropsWithChildren} from 'react';
import styled from "styled-components";

interface InputProps {
    width: string;
    type: HTMLInputTypeAttribute;
    id: string;
    placeholder?: string;
    value: string;
    maxLength?: number;
    minLength?:number
    onBlur?: (e: React.FocusEvent) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
                                   type,
                                   placeholder,
                                   width,
                                   onChange,
                                   onBlur,
    maxLength,
    minLength
                               }) => {
    return (

        <InputField
            type={type}
            width={width}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            maxLength={maxLength}
            minLength={minLength}
        />
    );
};

const InputField = styled.input`
  width: ${(InputField) => InputField.width};
  border: 2px solid var(--colors-light);
  padding: 10px 15px;
  margin: 15px 0;
  border-radius: var(--radii);
  cursor: pointer;
  font-size: 18px;
  font-family: 'Space Grotesk', sans-serif;

  ::placeholder {
    color: var(--colors-light);
  }
`;

export default Input;