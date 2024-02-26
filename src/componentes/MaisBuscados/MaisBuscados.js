import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Subtitulo = styled.h2`
  color: #333;
  font-size: 24px;
  margin-left: 20px;
  text-align: left;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Assegura que o conteúdo seja justificado igualmente */
  padding: 15px;
  text-align: center;
  height: auto; /* Altura automática baseada no conteúdo */
  position: relative; /* Permite posicionar o botão absolutamente em relação a este card */
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const Titulo = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 5px;
`;

const Preco = styled.p`
  font-size: 14px;
  color: #007bff;
  margin: 5px 0;
`;

const BotaoComprar = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px 20px; /* Torna o botão maior */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%; /* Ocupa toda a largura do card */

  &:hover {
    background-color: #0056b3;
  }
`;

const MaisBuscados = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const buscarLivros = async () => {
      try {
        const resposta = await fetch('http://localhost:8000/livros');
        const dados = await resposta.json();
        setLivros(dados);
      } catch (error) {
        console.error("Erro ao buscar livros mais buscados:", error);
      }
    };

    buscarLivros();
  }, []);

  return (
    <div>
      <Subtitulo>Mais Buscados</Subtitulo>
      <CardContainer>
        {livros.map(livro => (
          <Card key={livro.id}>
            <Image src={`/images/${livro.imagem}`} alt={`Capa do livro ${livro.titulo}`} />
            <Titulo>{livro.titulo}</Titulo>
            <Preco>{livro.preco}</Preco>
            <BotaoComprar>Comprar</BotaoComprar>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default MaisBuscados;
