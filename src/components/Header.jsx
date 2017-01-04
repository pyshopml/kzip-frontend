import React, {createClass} from 'react';

const Header = createClass({
  render () {
    return (
      <header>
        <input type="text" placeholder="Найти интересующую Вас информацию" />
      </header>
    );
  }
});

export default Header;