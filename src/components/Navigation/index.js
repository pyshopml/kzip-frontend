import React from 'react';
import NavLink from '../NavLink';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink path="/posts" name="Заявки" icon={"glyphicon glyphicon-book"} />
      </li>
    </ul>
  </nav>
);

export default Navigation;
