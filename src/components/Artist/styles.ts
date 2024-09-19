import styled from "styled-components";

export const Container = styled.div``;

export const Image = styled.img`
    cursor: pointer;

    width: 350px;
    height: 350px;

    opacity: .5;

    transition: all .2s;

    &:hover {
        opacity: 1;

        zoom: 1.1;
    }
`;