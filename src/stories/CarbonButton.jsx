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