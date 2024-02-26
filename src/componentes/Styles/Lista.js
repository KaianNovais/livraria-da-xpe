import styled from 'styled-components';

// Estilo para a lista (ul)
export const Lista = styled.ul`
  display: flex; // Define o layout flexível para os itens da lista
  justify-content: center; // Alinha os itens ao centro no eixo principal
  align-items: center; // Alinha os itens ao centro no eixo transversal
  list-style: none; // Remove a formatação padrão da lista
  padding: 0; // Remove o padding padrão
  margin: 0; // Remove a margem padrão para centralizar com precisão
  gap: 16px;
`;

// Estilo para o item da lista (li)
export const Item = styled.li`
  margin: 0 10px; // Adiciona uma margem entre os itens da lista
  cursor: pointer; // Altera o cursor para o tipo ponteiro, indicando clicabilidade
  padding: 5px 10px; // Padding para melhorar a área de clique e estética
  transition: background-color 0.3s; // Suaviza a mudança de cor de fundo ao interagir

  &:hover {
    background-color: #f0f0f0; // Muda a cor de fundo ao passar o mouse
  }
`;