import styled from 'styled-components'

export const ButtonStyled = styled.button<{
  img?: string
  fontSize?: number
  color: string
  width?: number
}>`
  background-color: whitesmoke;
  color: ${(props) => props.color};
  font-size: ${(props) => `${props.fontSize}em`};
  padding-top: ${(props) => `${props.fontSize ? props.fontSize * 0.6 : ''}em`};
  padding-bottom: ${(props) =>
    `${props.fontSize ? props.fontSize * 0.6 : ''}em`};
  border: ${(props) => `4px solid ${props.color}`};

  &::hover {
    background-color: ${(props) => props.color};
    color: whitesmoke;
  }
`
