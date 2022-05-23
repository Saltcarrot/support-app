import styled from 'styled-components'

const FormBottomWrapper = styled.div`
  display: flex;

  &:not(:first-of-type) {
    margin-top: 20px;
  }

  &.column {
    flex-direction: column;
  }
  &.row {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    label {
      width: 100%;
    }

    img {
      height: 100px;
      width: 100px;

      border-radius: 50px;
    }
  }
`

export default FormBottomWrapper
