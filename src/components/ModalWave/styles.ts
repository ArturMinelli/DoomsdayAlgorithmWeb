import styled from 'styled-components'

export const WaveContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme['gray-800']};

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
