import React, { Component } from 'react';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactSelectors from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import authSelectors from '../../redux/auth/auth-selectors';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <ul className="list">
        {this.props.contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} onDelete={() => this.props.onDelete(id)} />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactSelectors.getVisibleContacts(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
