import React from 'react'
import { Form } from '../../../../components/form'

import contactSection from './style.module.scss'

export const Contact = () => {
  return (
    <div className={contactSection.contact__section}>
      <div className={contactSection.header__content}>
        <h2 className={contactSection.header__title}>Contact us</h2>
        <p className={contactSection.header__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          purus odio tempor rutrum...
        </p>
      </div>
      <Form />
    </div>
  )
}
