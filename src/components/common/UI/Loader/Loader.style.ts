import styled from 'styled-components'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 30px;

    > div {
      position: absolute;
      top: 10px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: var(--dark-blue);
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    > div:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 1s infinite;
    }

    > div:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 1s infinite;
    }

    > div:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 1s infinite;
    }

    > div:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 1s infinite;
    }
  }
`

export default LoaderWrapper
