import React, { useReducer } from 'react';
import styled from 'styled-components';

import { flexContainer } from '../utils/';

import Search from './Search.js';
import User from './User.js';

const Main = styled.main`
  text-align: center;
  min-height: 100vh;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  ${flexContainer('column', 'flex-start', 'center')}
`;

const Header = styled.header`
  ${flexContainer('column', 'center', 'center')};
  width: 80%;
  height: 40vh;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  font-weight: normal;
`;

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER_DATA':
        return { userData: action.value };

      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    userData: undefined
  });

  return (
    <Main>
      <Header>
        <H1>Github search</H1>
        <Search dispatch={dispatch} />
      </Header>
      {state.userData && <User user={state.userData} />}
    </Main>
  );
};

export default App;
