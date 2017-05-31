import React, { PureComponent } from 'react';
import styles from './HeaderBar.css';
import logo from './components/logo/img/logo.png';

class HeaderBar extends PureComponent {
  render() {
    return (
      <div>
          <img src={logo} />
        <h2 className={`${styles.title}`}>{ 'Helo bar' }</h2>
      </div>
    );
  }
}

export default HeaderBar;
