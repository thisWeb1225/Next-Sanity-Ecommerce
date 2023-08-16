import styled from 'styled-components';

export const StyledText = styled.p<{ $size?: number, $color?: string, $weight?: number }>`

  font-size: ${props => props.$size || props.theme.fontSize.normal};
    
  color: ${props => props.$color || props.theme.colors.black};

  font-weight: ${props => props.$weight || 400};;
`

const Text = ({
  as: Component = 'p',
  size,
  color,
  weight,
  children
}: {
  as?: 'p' | 'span' | 'div'
  size?: number,
  color?: string,
  weight?: number
  children: React.ReactNode
}) => {
  return <StyledText as={Component} $size={size} $color={color} $weight={weight}>{children}</StyledText>
}

export default Text;