import { SliderInputContainer, SliderInputRange, SliderInputRoot, SliderInputThumb, SliderInputTrack, SliderInputValue } from "./styles";
import { SliderProps } from '@radix-ui/react-slider'

export function SliderInput({value, ...props}: SliderProps) {
  return (
    <SliderInputContainer>
      <SliderInputRoot
        { ...props }
      >
        <SliderInputTrack>
          <SliderInputRange />
        </SliderInputTrack>
        <SliderInputThumb />
      </SliderInputRoot>
      <SliderInputValue>
        {value}
      </SliderInputValue>
    </SliderInputContainer>
  )
}