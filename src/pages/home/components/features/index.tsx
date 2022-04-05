import React from 'react'

import { CardFeature } from '../../../../components/cardFeature'

import './style.scss'
import robot from '../../../../assets/robot.svg'
import iconWeb from '../../../../assets/vectorWeb.svg'
import iconData from '../../../../assets/vectorData.svg'
import iconDesktop from '../../../../assets/vectorNotebook.svg'
import iconSearch from '../../../../assets/vectorSearch.svg'
import iconTools from '../../../../assets/vectorTools.svg'

export const Features = () => {
  return (
    <>
      <div className="section__cta">
        <div>
          <img className="image__cta" src={robot} alt="Robô mascote da marca" />
        </div>
        <h1 className="text__cta">
          Make your marketing completely based on Artificial Intelligence.
        </h1>
      </div>
      <div className="section__features">
        <h1 className="section__feature--title">Explore the features!</h1>
        <p className="section__feature--description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          purus odio tempor rutrum...
        </p>
        <div className="cards__content">
          <div className="cards__list">
            <CardFeature
              image={iconWeb}
              alt="Icone de website"
              serviceDescription="Create Ai Based
      Website"
            />
            <CardFeature
              image={iconSearch}
              alt="Icone de Pesquisa"
              serviceDescription="Write SEO Friendly
      Contents"
            />
            <CardFeature
              image={iconTools}
              alt="Icone de ferramentas"
              serviceDescription="Maintain site with
      Artificial Intelligence"
            />
            <CardFeature
              image={iconData}
              alt="Icone de Análise de dados"
              serviceDescription="Response customer
      with analyzing data"
            />
            <CardFeature
              image={iconDesktop}
              alt="Icone de Desktop"
              serviceDescription="Show custom
      interface with Ai"
            />
          </div>
        </div>
      </div>
    </>
  )
}
