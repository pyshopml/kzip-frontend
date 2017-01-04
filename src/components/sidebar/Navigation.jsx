import React from 'react';
import {Link} from 'react-router';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link nav-link" to="/complains">
            <span className="glyphicon glyphicon-book" />
            Жалобы
          </Link>
        </li>
        <li>
          <Link className="link nav-link" to="/suggestions">
            <span className="glyphicon glyphicon-list-alt" />
            Предложения
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;