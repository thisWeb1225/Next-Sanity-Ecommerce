import styled from 'styled-components';

export const StyledButton = styled.button<{ $size?: number, $color?: string }>`
  font-size: ${props => props.theme.fontSize.normal + 'px'};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary1};
  width: 100%;
  max-width: 400px;
  padding: 10px 14px;
  border-radius: .4rem;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.4s ease-in-out;
  margin-top: 24px;
  &:hover {
  transform: scale(1.1, 1.1);
  }
`

const Button = ({
  size,
  color,
  children
}: {
  size?: number,
  color?: string,
  children: React.ReactNode
}) => {
  return <StyledButton $size={size} $color={color} type="button">{children}</StyledButton>
}

export default Button;