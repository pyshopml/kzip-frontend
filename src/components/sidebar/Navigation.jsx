import React from 'react';
import {Link} from 'react-router';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link nav-link" to="/complains">
            <span className="glyphicon glyphicon-book" />
            Заявки
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;