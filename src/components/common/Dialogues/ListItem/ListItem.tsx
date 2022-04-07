import { FC } from 'react'
import { Data } from '../../../../utils/types/dialogue'

import UI from '../../UI'

import Item from './ListItem.style'

const ListItem: FC<Data> = ({ itemKey, itemData }) => {
  return (
    <Item.CardWrapper id={itemKey}>
      <Item.HeaderWrapper>
        <UI.ViewBox.Status status={itemData.status} />
        {itemData.status === 'opened' || !itemData.messages ? (
          <UI.Date.Full time={itemData.createdAt} />
        ) : (
          <UI.Date.Full
            time={
              Object.values(itemData.messages)[
                Object.values(itemData.messages).length - 1
              ].time
            }
          />
        )}
        <UI.Button.Ellipsis id={itemKey} />
      </Item.HeaderWrapper>
      <Item.ContentWrapper>
        <h2>{itemData.title}</h2>
        <p>{itemData.subTitle}</p>
      </Item.ContentWrapper>
      <Item.FooterWrapper>
        {itemData.operator && (
          <UI.ViewBox.Users.Operator
            name={itemData.operator.name}
            photoUrl={itemData.operator.photoUrl}
          />
        )}
        {itemData.messages && (
          <div className='meta-data'>
            <UI.ViewBox.Images messages={itemData.messages} />
            <UI.ViewBox.Messages messages={itemData.messages} />
          </div>
        )}
      </Item.FooterWrapper>
    </Item.CardWrapper>
  )
}

export default ListItem
