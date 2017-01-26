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
  <div className="container">
    <Sidebar />
    <section className="main-area">
      <Header />
      <div>
        { children }
      </div>
    </section>
  </div>
);

export default App;