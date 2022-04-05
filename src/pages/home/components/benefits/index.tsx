import React from 'react'
import { CardBenefits } from '../cardBenefits'

import './style.scss'
import benefitsOne from '../../../../assets/benefits(1).svg'
import benefitsTwo from  '../../../../assets/benefits(2).svg'
import { BoxMessage } from '../../../../components/boxMessage'

export const Benefits = () => {
  return(
    <>
      <div className="benefits__header">
        <p className="header__subtitle">Let's introduce with</p>
        <h2 className="header__title">Your Writing Partner</h2>
        <p className="header__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus odio tempor rutrum...
        </p>
      </div>
      <div className="benefits__video"></div>
      <div benefits__infos--columns>
        <CardBenefits 
          subtitle="What is"
          title="Custom Interface" 
          description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus."
          image={benefitsOne}
          isImagePositionLeft={false}
         />
        <CardBenefits 
          subtitle="You can maintain your"
          title="Website with Ai" 
          description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus."
          image={benefitsTwo}
          isImagePositionLeft={true}
         />
      </div>
      <div className="benefits__box--message">
        <BoxMessage 
          title=""
          message=""
          textButton=""
        />
      </div>
    </>
  )
}