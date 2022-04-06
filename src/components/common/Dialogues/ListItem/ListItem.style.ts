import styled from 'styled-components'

const ListItemWrapper = styled.article`
  padding: 20px;

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

  margin-bottom: 20px;

  font-family: var(--font-nunito);
  font-weight: bold;
`

const ListItemContentWrapper = styled.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;

    font-size: 30px;
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
      margin-right: 20px;
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
