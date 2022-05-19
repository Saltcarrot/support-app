import { FC } from 'react'

import UI from '../../UI'

import { ListItemPropTypes } from './ListItemPropTypes'

import Item from './ListItem.style'

const ListItem: FC<ListItemPropTypes> = ({ item: { itemKey, itemData } }) => {
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
        <UI.Dropdown.ItemDropdown
          itemKey={itemKey}
          status={itemData.status}
          operatorID={itemData.operator?.id}
          clientID={itemData.client.id}
        />
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
