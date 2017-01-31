import React from 'react';

import css from './style.css';

const Header = () => (
  <header className={css.header}>
    <input 
      type="text" 
      placeholder="Найти интересующую Вас информацию" 
      className={css.searchBar}
    />
  </header>
);

export default Header;
