import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li className="list-item">
    <div className="list-item-data">
      <span>{name}:</span>
      <span>{number}</span>
    </div>
    <button className="btnContact" type="button" onClick={() => onDelete(id)}>
      &#215;
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
