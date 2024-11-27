import React from "react";
import { ImageSourcePropType, StatusBar, Button, Image } from "react-native";
import { Container, Title, InputContainer, Input, SearchButton, SearchButtonText, ParticipanteContainer, ParticipanteImage, ParticipanteNome } from "./styles";
import { useState } from "react";

interface Participante {
  primeiroNome: string;
  ultimoNome: string;
  imagem: ImageSourcePropType
}

const PARTICIPANTES: Participante[] = [
  {
    primeiroNome: "Francisco",
    ultimoNome: "Theodoro",
    imagem: require("../assets/francisco.png")
  },
  {
    primeiroNome: "Tiago",
    ultimoNome: "Leal",
    imagem: require("../assets/tiago.jpeg")
  }
];

export default function App(){
  const [primeiroNome, setPrimeiroNome] = useState<string>("");
  const [ultimoNome, setUltimoNome] = useState<string>("");
  const [participanteAchado, setParticipanteAchado] = useState<Participante | null>(null);

  const procurarParticipante = () => {
    if(primeiroNome.trim() && ultimoNome.trim()){
      const participante = PARTICIPANTES.find(
        p =>
          p.primeiroNome.toLowerCase() === primeiroNome.trim().toLowerCase() &&
          p.ultimoNome.toLowerCase() === ultimoNome.trim().toLowerCase()
      );

      if(participante){
        setParticipanteAchado(participante);
      } else{
        setParticipanteAchado(null);
        alert('Participante não encontrado');
      }
    } else{
      alert('Preencha os campos corretamente');
    }
  };

  return(
    <Container>
      <StatusBar barStyle="default" />
      <Title>Encontre seu participante</Title>

      <InputContainer>
        <Input
          placeholder="Primeiro nome"
          value={primeiroNome}
          onChangeText={setPrimeiroNome}
        />
        <Input
          placeholder="Último nome"
          value={ultimoNome}
          onChangeText={setUltimoNome}
        />
        <Button title="Procurar" onPress={procurarParticipante} />
      </InputContainer>

      {/* {participanteAchado && (
        <ParticipanteContainer>
          <Image 
              source={{ uri: participanteAchado.imagem }}
              style={{ width: 100, height: 100 }}
              resizeMode="cover"
          />
          <ParticipanteNome>
            {participanteAchado.primeiroNome} {participanteAchado.ultimoNome}
          </ParticipanteNome>
        </ParticipanteContainer>
      )}

      {!participanteAchado && (
        <ParticipanteContainer>
          <ParticipanteImage 
            source={require("./assets/placeholder.jpg")}
            resizeMode="cover"
          />
          <ParticipanteNome>Participante não encontrado</ParticipanteNome>
        </ParticipanteContainer>
      )} 
*/}


    </Container>
  );
}
