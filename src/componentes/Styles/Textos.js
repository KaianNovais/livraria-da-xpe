import styled from 'styled-components';

export const Titulo = styled.h1`
  font-family: 'San Francisco', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: ${props => props.tamanho || '32px'};
  color: ${props => props.cor || '#333'};
  line-height: ${props => props.altura || '1.2'};
  text-align: ${props => props.align || 'center'};
  margin-bottom: 20px;
`;

export const Subtitulo = styled.h2`
  font-family: 'San Francisco', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: ${props => props.tamanho || '24px'};
  color: ${props => props.cor || '#666'};
  line-height: ${props => props.altura || '1.35'};
  text-align: ${props => props.align || 'center'};
  margin-bottom: 15px;
  opacity: 0.8;
`;

export const Texto = styled.p`
  font-family: 'San Francisco', 'Helvetica Neue', sans-serif;
  font-size: ${props => props.tamanho || '16px'};
  color: ${props => props.cor || '#333'};
  line-height: ${props => props.altura || '1.5'};
  text-align: ${props => props.align || 'left'};
  margin-bottom: 15px;
`;