import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './styles';

import { Creators as UsersActions } from '../../store/ducks/users';

const LeftSideBar = ({ users, removeUser }) => (
  <Container>
    {!users.data.length && <p>Clique em algum local do mapa para adicionar um Usuario</p>}
    <ul>
      {users.data.map(user => (
        <li key={user.id}>
          <div>
            <img src={user.avatar} alt={user.name} />

            <div className="user-info">
              <strong>{user.name}</strong>
              <span>{user.login}</span>
            </div>

            <button
              type="button"
              onClick={() => {
                removeUser(user);
              }}
            >
              <i className="fa fa-fw fa-times-circle remove" />
            </button>

            <a href={user.github_url} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-fw fa-angle-right go-to-page" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </Container>
);

LeftSideBar.propTypes = {
  users: PropTypes.PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  removeUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeftSideBar);
