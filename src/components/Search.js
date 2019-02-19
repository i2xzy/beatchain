import React, { useState } from 'react';
import styled from 'styled-components';

import { flexContainer, getUserData } from '../utils/';

const Form = styled.form`
  ${flexContainer('column', 'space-between', 'center')}
  height: 8.5rem;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #fff;
  font-size: 20px;
  color: #fff;
  height: 3rem;
  padding: 0.5rem 0;
  outline: none;
  line-height: calc(3rem - 0.4rem)  width: 100%;
  background: transparent;
  transition: all 0.3s ease-in-out;
`;

const Button = styled.button`
  width: 100%;
  background: #39b54a;
  border: 0.2rem solid #c5c5c5;
  border-color: #39b54a;
  color: #ffffff;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  height: 3rem;
  line-height: calc(3rem - 0.4rem);
  padding: 0 3rem;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Search = ({ dispatch }) => {
  const [input, setInput] = useState('');

  const onChange = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    getUserData('https://api.github.com/users/' + input)
      .then(userData => {
        dispatch({ type: 'SET_USER_DATA', payload: userData });
        setInput('');
      })
      .catch(err => {
        dispatch({ type: 'SET_ERROR_MESSAGE', payload: err.message });
      });
  };

  return (
    <Form>
      <Input
        type="text"
        placeholder="Search for Github users"
        value={input}
        onChange={onChange}
      />
      <Button onClick={onSubmit}>Search</Button>
    </Form>
  );
};

export default Search;
