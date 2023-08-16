import styled from 'styled-components';

export const StyledTitle = styled.h2<{ $size?: number, $color?: string }>`
  font-size: ${props => props.$size 
    ? props.$size + 'px' 
    : props.theme.fontSize.xxl + 'px'};
  color: ${props => props.$color 
    ? props.$color
    : props.theme.colors.secondary1};
  text-transform: uppercase;
`

const Title = ({
  size,
  color,
  children
}: {
  size?: number,
  color?: string,
  children: React.ReactNode
}) => {
  return <StyledTitle $size={size} $color={color}>{children}</StyledTitle>
}

export default Title;