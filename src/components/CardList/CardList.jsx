import React from 'react';
import Card from '../Card/Card';
import style from './cardList.module.css';

const CardList = ({cards}) => {
  return (
    <div className={style.cardsWrapper}>
      <h1 className={style.title}>Ты сегодня покормил кота?</h1>
      <div className={style.cards}>
        {cards.map(card => <Card key={card.id} {...card}/>)}
      </div>
    </div>
  )
};

export default CardList;
