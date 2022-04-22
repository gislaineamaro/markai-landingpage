import React from 'react'
import { BtnCommon } from '../btnCommon'

import boxMessageStyle from './style.module.scss'

interface IBoxMessageProps {
  title: string
  message: string
  textButton: string
}

export const BoxMessage = ({
  title,
  message,
  textButton
}: IBoxMessageProps) => {
  return (
    <>
      <div className={boxMessageStyle.box__content}>
        <div className={boxMessageStyle.box__title}>{title}</div>
        <div className={boxMessageStyle.box__message}>{message}</div>
        <div className={boxMessageStyle.box__button__action}>
          <BtnCommon
            text={textButton}
            isIconHidden={true}
            btnType="__primary"
          />
        </div>
      </div>
    </>
  )
}
