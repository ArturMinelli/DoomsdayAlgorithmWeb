import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const ExplanationDialogContent = styled(Dialog.Content)`
  width: 24rem;
  background-color: ${(props) => props.theme['gray-800']};
  border: 2px solid ${(props) => props.theme['green-500']};
  border-radius: 6px;

  box-shadow: none;
`
export const ExplanationDialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`

export const ExplanationHeader = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['green-500']};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 0 0;
`

export const Explanation = styled.div`
  position: relative;
  padding: 3rem;
  background-color: ${(props) => props.theme['gray-800']};
  font-size: 0.925rem;
  font-weight: 600;

  p {
    color: ${(props) => props.theme['gray-300']};
    text-indent: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
    word-spacing: 0.25rem;
  }

  .wave + p {
    margin-top: 4rem;
  }

  .wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .wave svg {
      position: relative;
      display: block;
      width: calc(181% + 1.3px);
      height: 150px;
  }

  .wave .shape-fill {
      fill: ${(props) => props.theme['green-500']};
  }
`
