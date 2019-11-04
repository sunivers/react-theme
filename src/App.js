import React from 'react';
import styled from 'styled-components';
import { Button, Input, Checkbox } from './theme';

function App() {
  const buttonPrefix = () => (
    <span role="img" aria-label="disabled">
      🚫
    </span>
  );
  const handleClick = ({ target }) => {
    alert(target.innerText);
  };
  const InputAfter = () => <Button type="primary">Search</Button>;
  const handleChange = ({ target }) => {
    console.log(target.value);
  };
  return (
    <div className="App">
      <Section>
        <Title>Button</Title>
        <Button type="default">Default</Button>
        <Button type="danger">Danger</Button>
        <Button type="success">Success</Button>
        <Button type="primary">Primary</Button>
        <Button type="warning">Warning</Button>
        <Button type="info">Info</Button>
        <Button prefix={buttonPrefix} disabled>
          Disabled
        </Button>
        <Button onClick={handleClick}>Click</Button>
      </Section>
      <Section>
        <Title>Input</Title>
        <Input placeholder="default"></Input>
        <br />
        <br />
        <Input type="password" placeholder="password"></Input>
        <br />
        <br />
        <Input
          placeholder="search keyword"
          button={InputAfter}
          className="button"
        ></Input>
        <br />
        <br />
        <Input placeholder="change event" onChange={handleChange}></Input>
      </Section>
      <Section>
        <Title>Checkbox</Title>
        <Checkbox></Checkbox>
        <br />
        <br />
        <Checkbox label="Checkbox with Label"></Checkbox>
        <br />
        <br />
        <Checkbox disabled label="Disabled"></Checkbox>
      </Section>
      <Section>
        <Title>Radio</Title>
      </Section>
      <Section>
        <Title>Select</Title>
      </Section>
    </div>
  );
}
const Section = styled.section`
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;
const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

export default App;
