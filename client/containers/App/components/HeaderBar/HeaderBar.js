import React, { PureComponent } from 'react';
import styles from './HeaderBar.css';

class HeaderBar extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={`${styles.title}`}>{ 'Helo bar' }</h2>
      </div>
    );
  }
}

export default HeaderBar;
