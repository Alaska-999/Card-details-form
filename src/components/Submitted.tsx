import React, {FC} from 'react';
import styled from "styled-components";
import icon from '../images/icon-complete.svg'

const Submitted: FC = () => {
    return (
        <SubmittedSection>
                <IconComplete src={icon} alt='complete icon'/>
            <Heading>THANK YOU!</Heading>
            <Text>We`ve added your card details</Text>
            <Button>Continue</Button>

        </SubmittedSection>
    );
};

const SubmittedSection = styled.div`
    text-align: center;
    margin-left: 150px;
`

const IconComplete = styled.img`

`

const Heading = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: var(--colors-very-dark);
  letter-spacing: 6px;
  margin: 30px 0 20px;

`

const Text = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  color: var(--colors-dark);
  letter-spacing: 2px;
  margin-bottom: 35px;
`

const Button = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: var(--colors-very-dark);
  border-radius: var(--radii);
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  cursor: pointer;
`

export default Submitted;