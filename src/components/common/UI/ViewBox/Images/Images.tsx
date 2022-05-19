import { FC } from 'react'
import { countImages } from '../../../../../utils/helpers/getMessagesInfo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

import { ImagesPropTypes } from './ImagesPropTypes'

import ImagesWrapper from './Images.style'

const Images: FC<ImagesPropTypes> = ({ messages }) => {
  return (
    <>
      {countImages(messages) !== 0 && (
        <ImagesWrapper>
          <FontAwesomeIcon icon={faImages} />
          {countImages(messages)}
        </ImagesWrapper>
      )}
    </>
  )
}

export default Images
