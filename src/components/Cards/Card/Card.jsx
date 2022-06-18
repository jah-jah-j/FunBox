import React, {useState} from 'react';
import style from './Card.module.css';
import cardPhoto from '../../../assets/img/card-photo.png'
import CountMouses from './CountMouses/CountMouses'
import Weight from './Weight/Weight'
import Description from './Description/Description'
import Subtitle from './Subtitle/Subtitle'

const Card = ({card}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isDisabled = card.remainder === 0;

  const setActiveClass = () => {
    if (isDisabled) {
      return
    }
    if (isSelected) {
      setIsSelected(false)
    } else {
      setIsSelected(true)
    }
  }

  const setSelectedSubtitle = (isHover) => {
    if (isSelected) {
      setIsHovered(isHover)
    }
  }

  const cardStyling = () => {
    if (isDisabled) {
      return `${style.card} ${style.cardDisabled}`
    }
    return `${style.card} ${isSelected ? style.cardSelected : style.cardDefault}`
  }

  return (
    <div className={cardStyling()}>
      <div className={style.cardWrapper}
           onClick={setActiveClass}
           onMouseLeave={() => setSelectedSubtitle(true)}
           onMouseEnter={() => setSelectedSubtitle(false)}
      >
        <Subtitle subtitle={card.subtitle}
                  isHover={isHovered}
                  selectSubtitle={card.selectSubtitle}
        />
        <h2 className={style.cardTitle}>{card.name}</h2>
        <h3 className={style.cardTaste}>{card.taste}</h3>
        <CountMouses serving={card.serving} isDisabled={isDisabled}/>
        <div className={style.cardPhoto}>
          <img src={cardPhoto} alt="Котейка в ошейнике"/>
        </div>
        <Weight weight={card.weight} className={style.cardWeight}/>
      </div>

      <Description setActiveClass={setActiveClass}
                   description={card.description}
                   isSelected={isSelected}
                   isDisabled={isDisabled}
                   taste={card.taste}
      />

    </div>
  );
};

export default Card;
