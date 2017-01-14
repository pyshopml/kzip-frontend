import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <Link className="link nav-link" to="/applications">
          <span className="glyphicon glyphicon-book" />
          Заявки
        </Link>
      </li>
    </ul>
    <button type="button" className="btn btn-success">
      <Link to="/newpost">Создать заявку</Link>
    </button>
  </nav>
);

export default Navigation;
