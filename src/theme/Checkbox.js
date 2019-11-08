import React from 'react';
import styled from 'styled-components';
import palette from './palette.js';

const Checkbox = ({ label, ...props }) => {
  return (
    <Label disabled={props.disabled}>
      <input type="checkbox" {...props}></input>
      <div className="checkbox"></div>
      {label}
    </Label>
  );
};

const Label = styled.label`
  display: inline-flex;
  align-content: center;
  margin-bottom: 10px;
  font-size: 13px;

  &[disabled] {
    cursor: not-allowed;
  }

  input[type='checkbox'] {
    position: absolute;
    left: -9999px;

    &:checked ~ div.checkbox {
      background-color: ${palette.primary};

      &::after {
        position: absolute;
        content: '';
        display: block;
        width: 3px;
        height: 6px;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }

    &[disabled] ~ div.checkbox {
      background-color: ${palette.lightInfo};
      border-color: ${palette.lightInfo};

      &::after {
        position: absolute;
        content: '';
        display: block;
        width: 3px;
        height: 6px;
        border: solid #ddd;
        border-width: 0 2px 2px 0;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
  div.checkbox {
    width: 15px;
    height: 15px;
    border: 1px solid ${palette.primary};
    border-radius: 2px;
    margin-right: 5px;
    position: relative;
    box-sizing: border-box;
  }
`;

export default Checkbox;
