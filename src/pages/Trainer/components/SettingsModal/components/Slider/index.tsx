import { SliderInputRange, SliderInputRoot, SliderInputThumb, SliderInputTrack } from "./styles";
import { SliderProps } from '@radix-ui/react-slider'

export function SliderInput(props: SliderProps) {
  return (
  <SliderInputRoot
    { ...props }
    min={0}
    max={1}
    step={0.05}
  >
    <SliderInputTrack>
      <SliderInputRange />
    </SliderInputTrack>
    <SliderInputThumb />
  </SliderInputRoot>
  )
}