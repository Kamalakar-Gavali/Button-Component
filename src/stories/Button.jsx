import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import Icon from './Icon';

/**
 * Primary UI component for user interaction
 */
//   const  Button =({ primary, backgroundColor, size, label, ...props })=> {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

const Button=({variant,disableBoxShadow,disabled,startIcon,endIcon,size,color,label='Default'})=>{

  return (
    <button className={`${variant} ${disableBoxShadow?'no-box-shadow':''} ${size} ${color}`} disabled={disabled}>
<Icon iconName={startIcon}/>
{
  label
}
<Icon iconName={endIcon}/>
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