import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../../store/actions/users';
import * as ModalActions from '../../store/actions/modal';

import './style.css';

class AddUser extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    userInput: '',
  };

  handleInputChange = e => this.setState({ userInput: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { userInput } = this.state;
    const { addUserRequest, modal } = this.props;
    addUserRequest(userInput, modal.cordinates);
    this.setState({ userInput: '' });
  };

  closeModal = () => {
    const { closeModal } = this.props;
    closeModal();
    this.setState({ userInput: '' });
  };

  render() {
    const { userInput } = this.state;
    const { modal, loading } = this.props;
    return (
      <Modal isOpen={modal.isOpen} className="modal-container" overlayClassName="modal-overlay">
        <h2>Adicionar novo usuário</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            placeholder="Usuário do Github"
            value={userInput}
            onChange={this.handleInputChange}
          />
          <div className="buttons-container">
            <button type="button" onClick={this.closeModal}>
              Cancelar
            </button>
            <button type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  loading: state.users.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
    ...UserActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUser);
