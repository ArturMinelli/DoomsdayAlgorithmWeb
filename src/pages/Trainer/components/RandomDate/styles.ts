import styled, { css } from 'styled-components'
import { DateFadeOut } from '../../../../reducers/settings/reducer';

interface RandomDateContainerProps {
  fadeOut: DateFadeOut;
}

export const RandomDateContainer = styled.div<RandomDateContainerProps>`
  display: flex;
  opacity: ${({ fadeOut }) => fadeOut.active ? 0 : 1};
  justify-content: center;
  margin-top: 1rem;
  color: ${(props) => props.theme['green-500']};
  font-size: 1.4rem;
  font-weight: 700;
  ${({ fadeOut }) => fadeOut.active && css`
    animation: random-date-fade-out ${fadeOut.duration}s;
  `}

  @keyframes random-date-fade-out {
    0%   {opacity: 1;}
    80%  {opacity: 1;}
    100% {opacity: 0;}
}
`
