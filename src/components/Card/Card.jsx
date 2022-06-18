import React, {memo, useCallback, useState} from 'react';
import style from './card.module.css';
import cardPhoto from '../../assets/img/card-photo.png'
import CountMouses from './components/CountMouses/CountMouses'
import Weight from './components/Weight/Weight'
import Description from './components/Description/Description'
import Subtitle from './components/Subtitle/Subtitle'

const Card = ({remainder, subtitle, selectSubtitle, name, taste, serving, weight, description}) => {

  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const setActiveClass = useCallback(() => {
    if (!remainder) return

    if (isSelected) {
      setIsSelected(false)
    } else {
      setIsSelected(true)
    }
  }, [isSelected, remainder])

  const setSelectedSubtitle = (isHover) => {
    if (isSelected) {
      setIsHovered(isHover)
    }
  }

  const getCardClasses = () => {
    if (!remainder) {
      return `${style.card} ${style.cardDisabled}`
    }
    return `${style.card} ${isSelected ? style.cardSelected : style.cardDefault}`
  }

  const handleMouseLeave = () => setSelectedSubtitle(true)
  const handleMouseEnter = () => setSelectedSubtitle(false)

  return (
    <div className={getCardClasses()}>
      <div className={style.cardWrapper}
           onClick={setActiveClass}
           onMouseLeave={handleMouseLeave}
           onMouseEnter={handleMouseEnter}
      >
        <Subtitle subtitle={subtitle}
                  isHover={isHovered}
                  selectSubtitle={selectSubtitle}
        />

        <h2 className={style.cardTitle}>{name}</h2>
        <h3 className={style.cardTaste}>{taste}</h3>

        <CountMouses serving={serving} isDisabled={!remainder}/>

        <div className={style.cardPhoto}>
          <img src={cardPhoto} alt="Котейка в ошейнике"/>
        </div>

        <Weight weight={weight} className={style.cardWeight}/>

      </div>

      <Description setActiveClass={setActiveClass}
                   description={description}
                   isSelected={isSelected}
                   isDisabled={!remainder}
                   taste={taste}
      />

    </div>
  );
};

export default memo(Card);
