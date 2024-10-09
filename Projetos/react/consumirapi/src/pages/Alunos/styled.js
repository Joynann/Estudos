import styled from 'styled-components';

export const Title = styled.h1``;

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const PictureProfile = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const DivLink = styled.div`
  display: flex;
  width: 50px;
`;