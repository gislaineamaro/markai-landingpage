import React,{useState} from 'react'
import "./style.scss"

interface IButtonCommon {
  text: string
  icon?: string
  isIconHidden?: boolean
}

export const BtnCommon = ({text, icon, isIconHidden} : IButtonCommon) => {
  return(
    <button className="btn__common">
      <p className="btn__text">{text}</p>
      <img className="btn__icon" src={icon} alt="Buttom icon" hidden={isIconHidden}/>
    </button>
  )
}