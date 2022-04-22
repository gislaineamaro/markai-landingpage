import React from 'react'
import { CardBenefits } from '../../../../components/cardBenefits'

import sectionBenefits from './style.module.scss'
import benefitsOne from '../../../../assets/benefits(1).svg'
import benefitsTwo from '../../../../assets/benefits(2).svg'
import videoPlayer from '../../../../assets/videoPlayer.svg'
import { BoxMessage } from '../../../../components/boxMessage'

export const Benefits = () => {
  return (
    <div className={sectionBenefits.test}>
      <div className={sectionBenefits.benefits__header}>
        <p className={sectionBenefits.header__subtitle}>Let's introduce with</p>
        <h2 className={sectionBenefits.header__title}>Your Writing Partner</h2>
        <p className={sectionBenefits.header__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          purus odio tempor rutrum...
        </p>
      </div>
      <div className={sectionBenefits.benefits__video}>
        <img src={videoPlayer} alt="video de exibição de produtos"/>
      </div>
        <CardBenefits
          subtitle="What is"
          title="Custom Interface"
          description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus."
          image={benefitsOne}
          isImagePositionLeft={true}
        />
        <CardBenefits
          subtitle="You can maintain your"
          title="Website with Ai"
          description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus."
          image={benefitsTwo}
          isImagePositionLeft={false}
        />
      <div className={sectionBenefits.benefits__box__message}>
        <BoxMessage
          title="Increase your sales by analyzing your colleced data!"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit est ac nulla faucibus proin nisl augue. Vestibulum sem scelerisque suspendisse praesent pretium non. At mattis bibendum ut sed praesent. Nam at id elementum gravida."
          textButton="Learn more.."
        />
      </div>
    </div>
  )
}
