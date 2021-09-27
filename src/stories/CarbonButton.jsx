import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'carbon-components-react';

/**
 * Primary UI component for user interaction
 */
export const CarbonButton = ({ kind, size, label, ...props }) => {
  return (
    <Button
      kind={kind}
      size={size}
      {...props}
    >
      {label}
    </Button>
  )
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.oneOf(['danger', 'primary', 'secondary']),
  
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  kind: "primary",
  size: 'sm',
};
