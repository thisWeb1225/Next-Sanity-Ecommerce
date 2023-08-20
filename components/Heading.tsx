import styled from 'styled-components';
import { theme, breakpoints } from '@/styles';
import { BreakpointsType } from '@/styles/type';

const StyledHeading = styled.h2<{ $size?: string | BreakpointsType, $color?: string, $weight?: number }>`

  font-size: ${props => {
    if (typeof props.$size === 'string') {
      return props.$size;
    } else {
      return props.$size?.base
    }
  }};
    
  color: ${props => props.$color || props.theme.colors.primary1};

  font-weight: ${props => props.$weight || 600};
    
  text-transform: uppercase;

  @media (width < ${breakpoints.sm}) {
    font-size: ${props => {
      if (typeof props.$size === 'string') {
        return props.$size;
      } else {
        return props.$size?.sm
      }
    }};
  }
  @media (width < ${breakpoints.md}) {
    font-size: ${props => {
      if (typeof props.$size === 'string') {
        return props.$size;
      } else {
        return props.$size?.md
      }
    }};
  }
  @media (width < ${breakpoints.lg}) {
    font-size: ${props => {
      if (typeof props.$size === 'string') {
        return props.$size;
      } else {
        return props.$size?.lg
      }
    }};
  }
  @media (width < ${breakpoints.xl}) {
    font-size: ${props => {
      if (typeof props.$size === 'string') {
        return props.$size;
      } else {
        return props.$size?.xl
      }
    }};
  }
  @media (width < ${breakpoints.xxl}) {
    font-size: ${props => {
      if (typeof props.$size === 'string') {
        return props.$size;
      } else {
        return props.$size?.xxl
      }
    }};
  }
`

const Heading = ({ as = 'h2', size = theme.fontSize.l, color = theme.colors.black, weight, children }: {
  as?: 'h1' | 'h2' | 'h3' | 'h4',
  size?: string | BreakpointsType,
  color?: string,
  weight?: number,
  children: React.ReactNode
}) => {

  const Component = as;


  return (
    <StyledHeading as={Component} $size={size} $color={color} $weight={weight}>
      {children}
    </StyledHeading>
  )
}

export default Heading