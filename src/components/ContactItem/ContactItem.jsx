import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li className={css.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.deleteButton}
        onClick={() => onClick(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
