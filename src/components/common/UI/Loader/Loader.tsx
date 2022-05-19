import { FC } from 'react'

import LoaderWrapper from './Loader.style'

const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  )
}

export default Loader
