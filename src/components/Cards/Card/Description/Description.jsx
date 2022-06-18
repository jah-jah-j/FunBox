import React from 'react';
import style from '../Card.module.css';

const Description = ({isSelected, isDisabled, description, taste, setActiveClass}) => {

  const getContent = () => {
    if (isDisabled) {
      return `Печалька, ${taste} закончился.`
    }

    if (isSelected) {
      return description
    }

    return <>Чего сидишь? Порадуй котэ, <button onClick={setActiveClass}>купи.</button></>
  }

  return (
    <p className={style.cardDescription}>
      {getContent()}
    </p>
  )
};

export default Description;
