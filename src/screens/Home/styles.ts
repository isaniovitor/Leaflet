import styled from 'styled-components';

export const Main = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;

  margin: 20px;
  padding: 50px;
`;

export const MapContainer = styled.div`

`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Input = styled.input`
  position: absolute;
  z-index: 1000;

  top: 150px;
  left: 100px;

  width: 300px;
  height: 40px;

  border-radius: 6px;

  padding-left: 5px;
`;
