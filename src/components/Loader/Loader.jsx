import React from 'react';
import { Grid } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';
// import PropTypes from 'prop-types';

function Loader() {
  return (
    <Wrapper>
      <Grid
        height="80"
        width="80"
        radius="12.5"
        color="#fe1975"
        ariaLabel="grid-loading"

      />
    </Wrapper>
  );
}


// Loader.propTypes = PropTypes.string;

export default Loader;