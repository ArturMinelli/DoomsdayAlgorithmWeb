import styled, { css } from 'styled-components'
import * as Slider from '@radix-ui/react-slider'

export const SliderInputRoot = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 12rem;
  height: 2.4rem;

  ${(props) => props.disabled && css`
    opacity: 0.3;
  `}
`

export const SliderInputTrack = styled(Slider.Track)`
  position: relative;
  flex-grow: 1;
  height: 0.5rem;
  border-radius: 9999px;
  background: ${(props) => props.theme['gray-800']};
  box-shadow: -1px -1px 30px 2px ${(props) => props.theme['gray-800']};
`

export const SliderInputRange = styled(Slider.Range)`
  position: absolute;
  border-radius: 9999px;
  height: 100%;
  background: ${(props) => props.theme['green-500']};
`

export const SliderInputThumb = styled(Slider.Thumb)`
  all: unset;
  display: block;
  width: 1rem;
  height: 1rem;
  box-shadow: 0 3px 10px ${(props) => props.theme['gray-900']};
  border-radius: 50%;
  background: ${(props) => props.theme['green-500']};
`
