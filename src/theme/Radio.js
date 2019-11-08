import React from 'react';
import styled from 'styled-components';
import palette from './palette';

const Radio = ({ label, ...props }) => {
  return (
    <Label disabled={props.disabled}>
      <input type="radio" {...props}></input>
      <div className="radio"></div>
      {label}
    </Label>
  );
};

const Label = styled.label`
  display: inline-flex;
  font-size: 13px;
  margin-right: 10px;

  &[disabled] {
    cursor: not-allowed;
  }

  input[type='radio'] {
    position: absolute;
    left: -9999px;

    &:checked ~ div.radio {
      background-color: ${palette.primary};

      &::after {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 5px;
        background: #fff;
      }
    }

    &[disabled] ~ div.radio {
      background-color: ${palette.lightInfo};
      border-color: ${palette.lightInfo};

      &::after {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 5px;
        background: #ddd;
      }
    }
  }

  div.radio {
    width: 16px;
    height: 16px;
    border: 1px solid ${palette.primary};
    border-radius: 10px;
    margin-right: 5px;
    box-sizing: border-box;
  }
`;

export default Radio;
