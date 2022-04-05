import React, { ButtonHTMLAttributes, HTMLProps, useState } from 'react'
import './style.scss'

interface IButtonCommon extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string
  icon?: string
  isIconHidden?: boolean
}

export const BtnCommon = ({
  text,
  icon,
  isIconHidden,
  ...props
}: IButtonCommon) => {
  return (
    <button className="btn__common" {...props}>
      <p className="btn__text">{text}</p>
      <img
        className="btn__icon"
        src={icon}
        alt="Buttom icon"
        hidden={isIconHidden}
      />
    </button>
  )
}
