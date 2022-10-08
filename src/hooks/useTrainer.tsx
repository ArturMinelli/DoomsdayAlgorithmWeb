import { useContext } from "react";
import { TrainerContext } from "../contexts/TrainerContext";

export function useTrainer() {
  const context = useContext(TrainerContext)
  return context
}