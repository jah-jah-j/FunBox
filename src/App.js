import style from './App.module.css';
import Cards from './components/Cards/Cards';

function App() {

  const cards = [
    {
      id: 1,
      name: 'Нямушка',
      subtitle: 'Сказочное заморское яство',
      selectSubtitle: 'Котэ не одобряет?',
      description: 'Печень утки разварная с артишоками.',
      taste: 'с фуа-гра',
      serving: 10,
      weight: 0.5,
      remainder: 100,
    },
    {
      id: 2,
      name: 'Нямушка',
      subtitle: 'Сказочное заморское яство',
      selectSubtitle: 'Котэ не одобряет?',
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      taste: 'с рыбой',
      serving: 40,
      weight: 2,
      remainder: 10
    },
    {
      id: 3,
      name: 'Нямушка',
      subtitle: 'Сказочное заморское яство',
      selectSubtitle: 'Котэ не одобряет?',
      description: 'Филе из цыплят с трюфелями в бульоне.',
      taste: 'с курой',
      serving: 100,
      weight: 5,
      remainder: 0,
    },
  ]

  return (
    <div className={style.App}>
      <Cards cards={cards}/>
    </div>
  );
}

export default App;
