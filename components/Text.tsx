import { Styles } from 'styled-components/dist/types';
import styled, {css, RuleSet} from 'styled-components';
import { theme, breakpoints } from '@/styles';
import { BreakpointsType } from '@/styles/type';

export const StyledText = styled.p<{ $size?: string | BreakpointsType, $color?: string, $weight?: number, $cssVal?:  RuleSet<object> }>`


  font-size: ${props =>
    typeof props.$size === 'string'
    ? props.$size
    : props.$size?.base
  };
      
  color: ${props => props.$color || props.theme.colors.black};

  font-weight: ${props => props.$weight || 500};
  
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

const Text = ({
  as: Component = 'p' ,
  size = theme.fontSize.normal,
  color = theme.colors.black,
  weight = 500,
  sx,
  children
}: {
  as?: 'p' | 'span' | 'div' | 'i' | 'strong',
  size?: string | BreakpointsType,
  color?: string,
  weight?: number,
  sx?: Styles<object>,
  children: React.ReactNode
}) => {

  const cssVal = sx && css(sx);

  return <StyledText as={Component} $size={size} $color={color} $weight={weight} $cssVal={cssVal}>{children}</StyledText>
}

export default Text;