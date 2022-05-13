import { FC, useState } from 'react'

import UI from '../UI'

import { SidebarPropTypes } from './SidebarPropTypes'

import SidebarContainerWrapper from './Sidebar.style'

const Sidebar: FC<SidebarPropTypes> = ({
  title,
  setTitle,
  message,
  setMessage,
}) => {
  const [isContentShown, setIsContentShown] = useState(false)

  const toggleDropdown = () => {
    setIsContentShown(!isContentShown)
  }

  return (
    <SidebarContainerWrapper>
      <UI.Container flow='column'>
        <div className='dropdown--header'>
          <h2>Поиск обращений</h2>
          <UI.Button.Sidebar
            isDropdownShown={isContentShown}
            onClick={toggleDropdown}
          />
        </div>
        <div className={`dropdown--content ${!isContentShown ? 'hidden' : ''}`}>
          <h2>Поиск обращений</h2>
          <p>
            Начните заполнять одно из полей, чтобы найти необходимые обращения
          </p>
          <UI.Form.Group>
            <UI.Form.Label forHtml='title' text='Наименование обращения' />
            <UI.Form.OutsideInput
              name='title'
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
          </UI.Form.Group>
          <UI.Form.Group>
            <UI.Form.Label forHtml='name' text='Текст сообщения' />
            <UI.Form.OutsideInput
              name='message'
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
            />
          </UI.Form.Group>
        </div>
      </UI.Container>
    </SidebarContainerWrapper>
  )
}

export default Sidebar
