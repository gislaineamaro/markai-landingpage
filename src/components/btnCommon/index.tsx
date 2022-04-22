import React, { ButtonHTMLAttributes, HTMLProps, useState } from 'react'
import btnCommonStyle from './style.module.scss'

interface IButtonCommon extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string
  icon?: string
  isIconHidden?: boolean
  btnType?: '__primary' | ''
}

export const BtnCommon = ({
  text,
  icon,
  isIconHidden,
  btnType = '',
  ...props
}: IButtonCommon) => {
  return (
    <button className={btnCommonStyle[`btn__common${btnType}`]} {...props}>
      <p className={btnCommonStyle.btn__text}>{text}</p>
      <img
        className={btnCommonStyle.btn__icon}
        src={icon}
        alt="Buttom icon"
        hidden={isIconHidden}
      />
    </button>
  )
}
