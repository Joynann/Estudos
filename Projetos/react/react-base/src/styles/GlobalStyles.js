import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.primaryDarkColor};
  }
`;


export const Container = styled.section`
  max-width: 500px;
  margin: 30px auto;
  background: white;
  text-align: center;
`;
