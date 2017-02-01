import React, { Component, PropTypes } from 'react';
import { last } from 'ramda';
import SettingsNavigation from './SettingsNavigation';

import css from './style.scss';

class Settings extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentTab: 'account'
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState({
      currentTab: tab
    });
  }

  getCurrentTab() {
    const { pathname } = this.props.location;
    const vals = pathname.split('/')
    return last(vals);
  }

  render() {
    const currentTab = this.getCurrentTab();

    return (
      <article className={ css.page }>
        <SettingsNavigation currentTab={ currentTab } />
        <section className={css.form}>
          { this.props.children }
        </section>
      </article>
    );
  }
};

export default Settings;
