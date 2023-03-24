import PropTypes from 'prop-types';

const Button = ({ className, title }) => (
  <button type="button" className={className}>{ title }</button>
);

Button.defaultProps = {
  title: '',
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Button;
