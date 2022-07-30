import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${primaryDarkColor};
  }
`;


export const Container = styled.section`
  max-width: 500px;
  margin: 30px auto;
  background: ${primaryColor};
  text-align: center;
`;
