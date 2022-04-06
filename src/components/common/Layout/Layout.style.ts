import styled from 'styled-components'

const LayoutWrapper = styled.div`
  display: flex;
  align-content: center;

  &.auth {
    justify-content: center;

    min-height: 100vh;
  }

  &.common {
    justify-content: space-between;
  }
`

export default LayoutWrapper
