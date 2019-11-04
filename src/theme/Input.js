import React from 'react';
import styled from 'styled-components';

const Input = ({ type, button, ...props }) => {
  const Button = button;
  return (
    <InputWrapper>
      <InputStyle type={type ? type : 'text'} {...props}></InputStyle>
      {button && <Button></Button>}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;

  button {
    position: absolute;
    right: 0;
    width: 50px;
    height: 30px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;
const InputStyle = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #777;
  padding: 0px 10px;
  font-size: 13px;
  height: 30px;
  box-sizing: border-box;

  &.button {
    padding-right: 60px;
  }
`;

export default Input;
