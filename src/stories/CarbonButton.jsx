import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'carbon-components-react';

/**
 * Primary UI component for user interaction
 */
export const CarbonButton = ({ label, ...props }) => {
  return (
    <Button
      {...props}
    >
      {label}
    </Button>
  )
};