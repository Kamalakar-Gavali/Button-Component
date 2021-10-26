import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import Icon from './Icon';


const Button = ({ variant, disableBoxShadow, disabled, startIcon, endIcon, size, color, label = 'Default' }) => {

  return (
    <button className={`${variant} ${disableBoxShadow ? 'no-box-shadow' : ''} ${size} ${color}`} disabled={disabled}>
      <Icon iconName={startIcon} />
      {
        label
      }
      <Icon iconName={endIcon} />
    </button>
  );

};
// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   color:'default',
//   size: 'md',
//   onClick: undefined,
// };

export default Button;