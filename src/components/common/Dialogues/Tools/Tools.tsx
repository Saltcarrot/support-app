import { FC } from 'react'

import UI from '../../UI'

import { ToolsPropTypes } from './ToolsPropTypes'

import ToolsWrapper from './Tools.style'

const Tools: FC<ToolsPropTypes> = ({
  user,
  filter,
  setFilter,
  sort,
  setSort,
}) => {
  return (
    <ToolsWrapper>
      <UI.Container flow='row'>
        {user?.role === 'user' && (
          <UI.Button.CreateDialogue onClick={() => {}} />
        )}
        <UI.Select.Sort
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
      </UI.Container>
    </ToolsWrapper>
  )
}

export default Tools
