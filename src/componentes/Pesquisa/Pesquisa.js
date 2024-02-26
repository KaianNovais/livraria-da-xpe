import React from 'react';
import styled from 'styled-components';
import  { useState } from 'react';
import { Texto } from '../Styles/Textos';

// Estilos para o componente
const Container = styled.div`
  background-color: #282c34;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  margin: auto;
`;

const Titulo = styled.h1`
  color: #FFFFFF;
  font-size: 40px;
  text-align: center;
`;

const Subtitulo = styled.h2`
  color: #CCCCCC;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #555;
  color: #333;
  background-color: #fff;
`;

const Botao = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;
  font-weight: bold; // Adiciona peso à fonte para dar mais destaque

  &:hover {
    background-color: #0056b3;
  }
`;

// Componente Pesquisa
const Pesquisa = () => {

  const [termoBusca, setTermoBusca] = useState('');
  const [livros, setLivros] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/livros/titulo/${termoBusca}`);
      const data = await response.json();
      setLivros(Array.isArray(data) ? data : [data]); // Adapte conforme a estrutura de dados da sua API
      setTermoBusca(''); // Limpa o termo de busca após a submissão
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
      setLivros([]);
    }
  };
  


  return (
    <Container>
      <Titulo>Encontre seu próximo livro</Titulo>
      <Subtitulo>Explore por título, o livro desejado</Subtitulo>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite o nome do livro..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
        <Botao type="submit">Pesquisar</Botao>
      </Form>
      <ResultadoBusca livros={livros} />
    </Container>
  );
};

const Card = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 8px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
`;

const Info = styled.div``;


const Detalhes = styled.p`
  font-size: 14px;
  margin: 5px 0 0 0;
`;

const ResultadoBusca = ({ livros }) => {
  if (livros.length === 0) {
    return <Texto cor='white' tamanho='12px'>Nenhum livro encontrado...</Texto>
  }

  return (
    <div>
      {livros.map(livro => (
        <Card key={livro.id}>
          <Image src={`/images/${livro.imagem}`} alt={`Capa do livro ${livro.titulo}`} />
          <Info>
            <Detalhes>{livro.titulo}</Detalhes>
            <Detalhes>{livro.autor}</Detalhes>
          </Info>
        </Card>
      ))}
    </div>
  );
};


export default Pesquisa;
