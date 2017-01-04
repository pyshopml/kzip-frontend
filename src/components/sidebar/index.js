import React, {createClass} from 'react';
import Navigation from './Navigation.jsx';
import Authbar from './Authbar.jsx';

const Sidebar = createClass({
  render () {
    return (
      <aside>
        <div className="logo-area"> 
          <h2>ЯГражданин</h2>
        </div>

        <Authbar />
        <Navigation />
        
      </aside> 
    );
  }
});

export default Sidebar;