import PropTypes from 'prop-types';

const Button = ({ className, title, onClick }) => (
  <button onClick={onClick} type="button" className={className}>{ title }</button>
);

Button.defaultProps = {
  title: '',
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
