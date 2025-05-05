import styled from 'styled-components'

interface Props {
  variant?: string
  cursor?: string
}

export const StyledLikeButton = styled.div<Props>`
  background: ${(props) => (props.variant === 'primary' ? '#ff7b42' : '#1c1c1e')};
  border: none;
  color: #fff;
  width: 80px;
  height: 32px;
  display: flex;
  font-size: 14px;
  justify-content: center;
  cursor: ${(props) => (props.cursor === 'mouse' ? 'mouse' : 'pointer')};
  transition: all 0.1s ease-in-out;
  align-items: center;
  &:hover {
    background: ${(props) => (props.variant === 'primary' ? '#ff8d5c' : '#414145')};
  }
`
