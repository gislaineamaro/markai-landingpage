import React from 'react'
import { BtnCommon } from '../btnCommon'

import './style.scss'

interface IBoxMessageProps{
  title: string
  message: string
  textButton: string
}

export const BoxMessage = ({title, message, textButton}: IBoxMessageProps) => {
  return(
    <>
      <div className="box__content">
        <div className="box__title">{title}</div>
        <div className="box__message">{message}</div>
        <div className="box__button--action">
          <BtnCommon text={textButton} isIconHidden={true}/>
        </div>
      </div>
    </>
  )
}