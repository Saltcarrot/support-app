import styled from 'styled-components'
import { device } from '../../../utils/helpers/breakpoints'

const SidebarContainerWrapper = styled.aside`
  max-width: 375px;
  width: 100%;

  .dropdown {
    &--header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      @media ${device.tablet} {
        display: none;
      }
    }

    &--content {
      overflow: hidden;
      transition: max-height 0.4s ease;
      height: auto;
      max-height: 100vh;

      &.hidden {
        max-height: 0;

        @media ${device.tablet} {
          max-height: 100vh;
        }
      }

      h2 {
        display: none;

        @media ${device.tablet} {
          display: inline-block;

          margin-bottom: 20px;
        }
      }

      > div,
      p {
        margin-top: 20px;
      }
    }
  }
`

export default SidebarContainerWrapper
