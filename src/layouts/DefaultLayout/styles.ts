/*eslint-disable*/

import styled from "styled-components"

export const LayoutContainer = styled.div`
  max-width: 70rem;
  min-height: calc(100vh - 0.6rem);// calc(100vh - 4.25rem);
  margin: 0.6rem auto; //5rem auto
  padding: 1.5rem;
  background: ${props => props.theme["gray-800"]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    margin: none;
  }
`
