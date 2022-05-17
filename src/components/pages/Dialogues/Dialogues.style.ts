import styled from 'styled-components'

import { device } from '../../../utils/helpers/breakpoints'

const DialoguesWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0 auto;

  .dialogues-box {
    height: 100%;
    max-height: calc(100vh - 61px);
    width: 100%;

    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media ${device.tablet} {
    max-width: 720px;
  }

  @media ${device.laptop} {
    max-width: 960px;
  }

  @media ${device.laptopL} {
    max-width: 1320px;
  }
`

export default DialoguesWrapper
