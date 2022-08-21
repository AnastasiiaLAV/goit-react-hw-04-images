import styled from 'styled-components';

export const GalleryItem = styled.li`
    border-radius: 4px;
    box-shadow: 0px 2px 4px -1px rgb(234, 11, 34, 0.4), 0px 4px 5px 0px rgb(125, 5, 34, 0.4), 0px 1px 10px 0px rgb(85, 73, 75, 0.5);
`
export const GalleryImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        transform: scale(1.03);
    cursor: zoom-in;
    }
`