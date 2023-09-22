import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ filter, onChange }) {
  return (
    <>
      <p className={css.filterFind}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        className={css.inputControl}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
