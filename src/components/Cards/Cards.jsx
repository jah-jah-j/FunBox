import React from 'react';
import Card from './Card/Card';
import style from './Cards.module.css';

const Cards = ({cards}) => {
  return (
    <div className={style.cardsWrapper}>
      <h1 className={style.title}>Ты сегодня покормил кота?</h1>
      <div className={style.cards}>
        {cards.map(card => <Card key={card.id} card={card}/>)}
      </div>
    </div>
  )
};

export default Cards;
