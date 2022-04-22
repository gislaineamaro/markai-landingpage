import React from 'react'
import { BtnCommon } from '../btnCommon'

import formStyle from './style.module.scss'

export const Form = () => {
  return(
    <>
      <form className={formStyle.form}>
        <div className={formStyle.input__group}>
          <input className={formStyle.input__name} type="text" name="inputName" placeholder="Your Name"/>
          <input className={formStyle.input__email} type="email" name="inputEmail" placeholder="Your Email Address"/>
        </div>
        <textarea className={formStyle.input__message} name="inputMessage" rows={10} placeholder="Your Messages"/>
        <BtnCommon text="Submit" isIconHidden={true}/>
      </form>
    </>
  )
}