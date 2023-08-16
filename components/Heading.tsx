import styled from 'styled-components';
import theme from '@/styles/theme';

const StyledHeading = styled.h2<{ $size?: string, $color?: string, $weight?: number }>`

  font-size: ${props => props.$size || props.theme.fontSize.banner};
    
  color: ${props => props.$color || props.theme.colors.white};

  font-weight: ${props => props.$weight|| 600};
    
  text-transform: uppercase;
`

const Heading = ({ as = 'h2', size = theme.fontSize.l, color = theme.colors.black, weight, children }: {
  as?: 'bannerTitle' | 'h1' | 'h2' | 'h3' | 'h4',
  size?: string,
  color?: string,
  weight?: number,
  children: React.ReactNode
}) => {

  let acturalSize = as === 'bannerTitle' ? theme.fontSize.banner : size
  let acturalColor = as === 'bannerTitle' ? theme.colors.white : color
  const Component = as === 'bannerTitle' ? 'h2' : as;

  return (
    <StyledHeading as={Component} $size={acturalSize} $color={acturalColor} $weight={weight}>
      {children}
    </StyledHeading>
  )
}

export default Heading