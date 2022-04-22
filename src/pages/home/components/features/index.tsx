import React from 'react'

import { CardFeature } from '../../../../components/cardFeature'

import  featureStyle from './style.module.scss'
import robot from '../../../../assets/robot.svg'
import iconWeb from '../../../../assets/vectorWeb.svg'
import iconData from '../../../../assets/vectorData.svg'
import iconDesktop from '../../../../assets/vectorNotebook.svg'
import iconSearch from '../../../../assets/vectorSearch.svg'
import iconTools from '../../../../assets/vectorTools.svg'

const data = [
  {
    img: iconWeb,
    alt: 'Icone de website',
    description: 'Create Ai Based Website'
  },
  {
    img: iconSearch,
    alt:"Icone de Pesquisa",
    description: "Write SEO Friendly Contents"
  },
  {
    img: iconTools,
    alt: "Icone de ferramentas",
    description: "Maintain site with Artificial Intelligence"
  },
  {
    img: iconData,
    alt: "Icone de Análise de dados",
    description: "Response customer with analyzing data"
  },
  {
    img: iconDesktop,
    alt: "Icone de Desktop",
    description: "Show custom interface with Ai"
  },
]

export const Features = () => {
  return (
    <>
      <div className={featureStyle.section__cta}>
        <div>
          <img className={featureStyle.image__cta} src={robot} alt="Robô mascote da marca" />
        </div>
        <h1 className={featureStyle.text__cta}>
          Make your marketing completely based on Artificial Intelligence.
        </h1>
      </div>
      <div className={featureStyle.section__features}>
        <div className={featureStyle.section__feature__header}>
          <h1 className={featureStyle.section__feature__title}>Explore the features!</h1>
          <p className={featureStyle.section__feature__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            purus odio tempor rutrum...
          </p>
        </div>
        <div className={featureStyle.cards__content}>
          <div className={featureStyle.cards__list}>
            {data.map((item, key) => (
              <CardFeature
                key={key}
                image={item.img}
                alt={item.alt}
                serviceDescription={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
