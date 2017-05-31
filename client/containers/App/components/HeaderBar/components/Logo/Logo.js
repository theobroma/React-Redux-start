import { PureComponent} from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import logo from './img/logo.png';

import styles from './Logo.css';

class Logo extends PureComponent {
  static contextTypes = {
    i18n: PropTypes.object,
  }

  render() {
    const { l } = this.context.i18n;

    return (
      <div>
        <Link to="/">
          logo
          <img
            alt={l('Logo')}
            className={styles.logo}
            src={logo}
          />
        </Link>
      </div>
    );
  }
}

export default Logo;
