import styled from 'styled-components';

export const Searchbar = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #2c7b19;
    box-shadow: 0px 2px 4px -1px rgb(234, 11, 34, 0.4), 0px 4px 5px 0px rgb(125, 5, 34, 0.4), 0px 1px 10px 0px rgb(85, 73, 75, 0.5);
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    `

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 2px 4px -1px rgb(234, 11, 34, 0.4), 0px 4px 5px 0px rgb(125, 5, 34, 0.4), 0px 1px 10px 0px rgb(85, 73, 75, 0.5);
`
export const SearchFormBtn = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover{
        opacity: 1;
    }
`
export const SearchFormBtnLable = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
`
export const SearchFormInput = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    &::placeholder {
        font: inherit;
        font-size: 18px;
    }
`
