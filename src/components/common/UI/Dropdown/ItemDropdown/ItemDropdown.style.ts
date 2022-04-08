import styled from 'styled-components'

const ItemDropdownStyle = styled.div<{ isVisible: boolean }>`
  position: relative;

  .dropdown-item {
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    position: absolute;

    top: 35px;
    right: 0;

    font-weight: bold;

    border-radius: 10px 0 10px 10px;
    background-color: var(--grey-blue);
    color: #fff;
    box-shadow: var(--card-box-opacity-1);

    z-index: 10;
    }
  }
`

export default ItemDropdownStyle
