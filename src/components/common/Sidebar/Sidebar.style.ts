import styled from 'styled-components'
import { device } from '../../../utils/helpers/breakpoints'

const SidebarContainerWrapper = styled.aside`
  max-width: 375px;
  width: 100%;

  @media ${device.mobileL} {
    max-width: 250px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }

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
      width: 100%;
      height: auto;
      max-height: 100vh;

      overflow: hidden;

      transition: max-height 0.4s ease;

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
