/* ------------------------------------------------------------------------------
* App.jsx
*
* main root component
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { PropTypes } from 'react';
import Sidebar from './sidebar';
import Header from './Header';

const App = props => (
  <div className="main">
    <Sidebar />
    <section>
      <Header />
      <div className="main-area">
        {props.children}
      </div>
    </section>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
