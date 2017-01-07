import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link className="link nav-link" to="/applications">
          <span className="glyphicon glyphicon-book" />
          Заявки
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
