import styled from 'styled-components'

const ListItemWrapper = styled.article`
  padding: 10px 15px;

  border-radius: 10px;

  background-color: #fff;

  box-shadow: var(--card-box-opacity-1);

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`

const ListItemHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
`

const ListItemContentWrapper = styled.div`
  margin-bottom: 10px;

  h2 {
    margin-bottom: 10px;

    font-size: 24px;
    font-weight: bold;
  }
`

const ListItemFooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .meta-data {
    display: flex;
    align-items: center;

    > div:not(:last-of-type) {
      margin-right: 10px;
    }
  }
`

const Item = {
  CardWrapper: ListItemWrapper,
  HeaderWrapper: ListItemHeader,
  ContentWrapper: ListItemContentWrapper,
  FooterWrapper: ListItemFooterWrapper,
}

export default Item
