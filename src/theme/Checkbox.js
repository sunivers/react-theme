import React from 'react';
import styled from 'styled-components';
import palette from './palette.js';

const Checkbox = ({ label, ...props }) => {
  return (
    <Label>
      <input type="checkbox" {...props}></input>
      <div className="checkbox"></div>
      <div>{label}</div>
    </Label>
  );
};

const Label = styled.label`
  display: inline-flex;
  align-content: center;
  margin-bottom: 10px;
  font-size: 13px;

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

    &[disabled] ~ * {
      cursor: not-allowed;
    }
  }
  div.checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid #ddd;
    border-radius: 2px;
    margin-right: 5px;
    position: relative;
  }
`;

export default Checkbox;
