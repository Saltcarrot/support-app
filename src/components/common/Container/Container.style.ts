import styled from 'styled-components'

import { device } from '../../../utils/helpers/breakpoints'

const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  padding: 10px;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 720px;
  }

  @media ${device.laptop} {
    max-width: 960px;
  }

  @media ${device.laptopL} {
    max-width: 1320px;
  }

  &.column {
    flex-direction: column;
  }
  &.row {
    flex-direction: row;
  }
`

export default ContainerWrapper
