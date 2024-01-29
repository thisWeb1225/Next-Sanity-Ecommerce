import { Styles } from 'styled-components/dist/types';
import styled, {css, RuleSet} from 'styled-components';
import { theme, breakpoints } from '@/styles';
import { BreakpointsType } from '@/styles/type';

const StyledHeading = styled.h2<{ $size?: string | BreakpointsType, $color?: string, $weight?: number, $cssVal?:  RuleSet<object>}>`

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

  ${props => props.$cssVal}

  @media (width < ${breakpoints.sm}) {
    font-size: ${props => 
      typeof props.$size === 'string' 
        ? props.$size 
        : props.$size?.sm
    };
  }
  @media (width < ${breakpoints.md}) {
    font-size: ${props => 
      typeof props.$size === 'string' 
        ? props.$size 
        : props.$size?.md
    };
  }
  @media (width < ${breakpoints.lg}) {
    font-size: ${props => 
      typeof props.$size === 'string' 
        ? props.$size 
        : props.$size?.lg
    };
  }
  @media (width < ${breakpoints.xl}) {
    font-size: ${props =>  
      typeof props.$size === 'string' 
        ? props.$size 
        : props.$size?.xl
    };
  }
  @media (width < ${breakpoints.xxl}) {
    font-size: ${props =>
      typeof props.$size === 'string' 
        ? props.$size 
        : props.$size?.xxl
    };
  }
`

const Heading = ({ 
  as: Component = 'h2', 
  size = theme.fontSize.l, 
  color = theme.colors.black, 
  weight, 
  sx,
  children 
}: {
  as?: 'h1' | 'h2' | 'h3' | 'h4',
  size?: string | BreakpointsType,
  color?: string,
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  sx?: Styles<object>,
  children: React.ReactNode
}) => {

  const cssVal = sx && css(sx);

  return (
    <StyledHeading as={Component} $size={size} $color={color} $weight={weight} $cssVal={cssVal}>
      {children}
    </StyledHeading>
  )
}

export default Heading