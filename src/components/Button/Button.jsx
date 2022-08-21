import React from 'react';
import PropTypes from 'prop-types';
import { BtnLoadMore } from './Button.styled';

const Button = ({onClick}) => {
    return (
        <BtnLoadMore type="button" onClick={onClick}>Load More</BtnLoadMore>
    )
}

Button.propType = {
    onClick: PropTypes.func.isRequired,
};
export default Button;