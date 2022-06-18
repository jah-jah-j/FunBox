import React from 'react';
import style from './CountMouses.module.css';

const CountMouses = ({serving, isDisabled}) => {

  function countMouses(count) {
    if (count <= 10) {
      return <span>мышь в подарок</span>
    }

    if (count > 10 && count <= 50) {
      return <span><strong>2</strong> мыши в подарок</span>
    }

    if (count > 50 && count < 100) {
      return <span>ответ не готов</span>
    }

    if (count >= 100) {
      return <span><strong>5</strong> мышей в подарок <br/>заказчик доволен</span>
    }
  }

  return (
    <p className={isDisabled ? style.cardServing + ' ' + style.disabled : style.cardServing}>
      <span><strong>{serving}</strong> порций</span>
      {countMouses(serving)}
    </p>
  )
};

export default CountMouses;
