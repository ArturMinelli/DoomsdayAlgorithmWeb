import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { StartButtonContainer } from "./styles";

export function StartButton() {
const { createNewCycle } = useContext(CyclesContext)

  return(
    <StartButtonContainer id="startButton" onClick={ createNewCycle }>
      Start
    </StartButtonContainer>
  )
}