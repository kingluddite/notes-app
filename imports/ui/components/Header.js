import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

export const Header = (props) => {

    return (
      <header className="header">
        <div className="header__content">
          <h1 className="header__title">{props.title}</h1>
          <button className="button button--link-text" onClick={() => props.handleLogout() }>Logout</button>
        </div>
      </header>
    );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired
}

// export default Header;
export default createContainer(() => {
  return {
     handleLogout: () => Accounts.logout()
  };
}, Header);
