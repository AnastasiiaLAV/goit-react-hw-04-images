import styled from 'styled-components';

export const BtnLoadMore = styled.button`
    padding: 8px 16px;
    margin: 10px auto;
    background-color: #2c7b19;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: block;
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    border-radius: 4px;
    box-shadow: 0px 2px 4px -1px rgb(234, 11, 34, 0.4), 0px 4px 5px 0px rgb(125, 5, 34, 0.4), 0px 1px 10px 0px rgb(85, 73, 75, 0.5);
    &:hover,
    &:focus {
        background-color:  #154908;
        transform: scale(0.98);
        box-shadow: 0px 2px 4px -1px rgb(234, 15, 34, 0.5), 0px 4px 5px 0px rgb(130, 10, 34, 0.4), 0px 1px 10px 0px rgb(80, 73, 75, 0.5);
        }
`
