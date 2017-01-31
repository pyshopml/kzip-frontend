/* ------------------------------------------------------------------------------
* App.jsx
*
* root UI component
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { PropTypes } from 'react';
import Sidebar from '../Sidebar';
import Header from '../../components/Header';

import base from './base.css';
import css from './layout.css';

const App = ({ children }) => (
  <div className={css.container}>
    <Sidebar />
    <section className={css.mainArea}>
      <Header />
      <section className={css.mainContent}>
        { children }
      </section>
    </section>
  </div>
);

export default App;