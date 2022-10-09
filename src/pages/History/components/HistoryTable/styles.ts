import styled from 'styled-components'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Dialog from '@radix-ui/react-dialog'

export const ScrollAreaRoot = styled(ScrollArea.Root)`
  width: 100%;
  height: 27.5rem;
  border-radius: 4;
  overflow: hidden;
  box-shadow: 0 2px 10px black;
  margin-top: 2rem;
`

export const ScrollAreaViewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  background: ${(props) => props.theme['gray-800']};
  transition: background 160ms ease-out;

  &:hover {
    background: ${(props) => props.theme['gray-900']};
  }

  &[data-orientation="vertical"] {
    width: 10px;
  }
`

export const ScrollAreaThumb = styled(ScrollArea.Thumb)`
  flex: 1;
  background: ${(props) => props.theme['green-500']};
  border-radius: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44;
    min-height: 44;
  }
`

export const HistoryContentContainer = styled.div`
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 0.9rem;
      font-size: 0.85rem;
      line-height: 1.6;

      &:first-child {
        width: 30%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }

    .weekday {
      position: relative;

    &:hover svg {
      opacity: 1;
      cursor: pointer;
      color: ${(props) => props.theme['gray-100']};
    }
    }
  }
`

export const OpenModalButton = styled(Dialog.Trigger)`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;

  svg {
    transition: 0.75s;
    opacity: 0;
  }
`

export const DefaultFocus = styled.button`
  opacity: 0;

  &:focus {
    box-shadow: none;
  }
`
