import styled, { css } from 'styled-components'
import { SettingOption } from '../../../../contexts/TrainerContext'

interface RandomDateContainerProps {
  fadeOut: SettingOption;
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
    animation: random-date-fade-out ${fadeOut.value}s;
  `}

  @keyframes random-date-fade-out {
    0%   {opacity: 1;}
    50%  {opacity: 0.75;}
    100% {opacity: 0;}
}
`
