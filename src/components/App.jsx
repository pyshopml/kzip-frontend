/* ------------------------------------------------------------------------------
* App.jsx
*
* main root component
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, {createClass} from 'react';
import Sidebar from './sidebar';
import Header from './Header.jsx';

const App = createClass({
  render () {
    return (
      <div className="main">
        <Sidebar />
        <section>
          <Header />
          <div className="main-area">
            {this.props.children}
          </div>
        </section>
      </div>
    );  
  }
});

export default App;