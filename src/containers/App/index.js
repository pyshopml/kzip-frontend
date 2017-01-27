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

const App = ({ children }) => (
  <div className="l-container">
    <Sidebar />
    <section className="l-main-area">
      <Header />
      <section className='l-main-content'>
        { children }
      </section>
    </section>
  </div>
);

export default App;