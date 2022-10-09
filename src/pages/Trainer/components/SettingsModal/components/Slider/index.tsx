import { SliderInputContainer, SliderInputRange, SliderInputRoot, SliderInputThumb, SliderInputTrack, SliderInputValue } from "./styles";
import { SliderProps } from '@radix-ui/react-slider'

export interface SliderInputProps extends SliderProps {
  suffix?: string;
}

export function SliderInput({suffix, value, ...props}: SliderInputProps) {
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
        {value}{suffix}
      </SliderInputValue>
    </SliderInputContainer>
  )
}