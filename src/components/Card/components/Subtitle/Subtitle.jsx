import React from 'react';
import style from '../../card.module.css'

const Subtitle = ({subtitle, selectSubtitle, isHover}) => {
  return <p className={isHover ? `${style.cardSubtitle} ${style.cardSubtitleHover}` : style.cardSubtitle}>
    {isHover ? selectSubtitle : subtitle}
  </p>
};

export default Subtitle;
