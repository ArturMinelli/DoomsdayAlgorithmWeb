import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const ExplanationDialogContent = styled(Dialog.Content)`
  width: 26rem;
  background-color: ${(props) => props.theme['gray-800']};
  border: 2px solid ${(props) => props.theme['green-500']};
  border-radius: 6px;
  position: relative;
  box-shadow: none;

  @media (max-width: 600px) {
   width: 95vw;
  }
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
  position: relative;

  button {
    color: ${(props) => props.theme['gray-100']};
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;

    &:hover {
      cursor: pointer;
    }
  }
`

export const Explanation = styled.div`
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

  h3 {
    text-align: center;
    margin: 2rem 0;
    padding: 10px 0;
    border-radius: 99px;
    border-bottom: 1px solid ${(props) => props.theme['green-100']};
  }
`
