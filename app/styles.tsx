import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-color: orange;
  padding: 50px 20px 20px;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 10px;
`;

const SearchButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: blue;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const SearchButtonText = styled.span`
  font-size: 18px;
  color: white;
`;

const ParticipanteContainer = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

const ParticipanteImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const ParticipanteNome = styled.span`
  font-size: 18px;
  margin-top: 10px;
`;

export { SearchButton, SearchButtonText, ParticipanteContainer, ParticipanteImage, ParticipanteNome };
