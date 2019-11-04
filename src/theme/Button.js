import React from 'react';
import styled from 'styled-components';
import palette from './palette';

const Button = ({ type, prefix, suffix, children, ...props }) => {
  const Prefix = prefix;
  const Suffix = suffix;
  return (
    <ButtonStyle type="button" className={type ? type : ''} {...props}>
      {prefix ? <Prefix /> : ''}
      {children}
      {suffix ? <Suffix /> : ''}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  height: 32px;
  min-width: 50px;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  border: 1px solid #ddd;
  color: #777;

  &[disabled] {
    cursor: not-allowed;
    background-color: #ddd;
    color: #fff;

    &:hover {
      border-color: #ddd;
      color: #fff;
    }
  }

  &:hover {
    border-color: ${palette.primary};
    color: ${palette.primary};
  }

  &.danger {
    background-color: ${palette.danger};
    border-color: ${palette.danger};
    color: #fff;

    &:hover {
      background-color: ${palette.lightDanger};
      border-color: ${palette.lightDanger};
    }
  }

  &.success {
    background-color: ${palette.success};
    border-color: ${palette.success};
    color: #fff;

    &:hover {
      background-color: ${palette.lightSuccess};
      border-color: ${palette.lightSuccess};
    }
  }

  &.primary {
    background-color: ${palette.primary};
    border-color: ${palette.primary};
    color: #fff;

    &:hover {
      background-color: ${palette.lightPrimary};
      border-color: ${palette.lightPrimary};
    }
  }

  &.warning {
    background-color: ${palette.warning};
    border-color: ${palette.warning};
    color: #fff;

    &:hover {
      background-color: ${palette.lightWarning};
      border-color: ${palette.lightWarning};
    }
  }

  &.info {
    background-color: ${palette.info};
    border-color: ${palette.info};
    color: #fff;

    &:hover {
      background-color: ${palette.lightInfo};
      border-color: ${palette.lightInfo};
    }
  }
`;

export default Button;
