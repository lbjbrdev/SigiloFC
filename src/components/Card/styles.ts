import styled from "styled-components";

interface IStyledProps {
    isPast: boolean;
}

export const Container = styled.div<IStyledProps>`
    background-color: #e0248f;

    min-width: 400px;
    max-width: 700px;

    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 50px;

    border-radius: 10px;

    cursor: ${props => props?.isPast ? 'not-allowed' : 'pointer'};

    opacity: ${props => props?.isPast ? .4 : 1};
`;

export const Place = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;

    color: #fff;

    font-weight: bold;
    font-size: 24px;
`;

export const DateAndHour = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;

    color: #fff;

    font-size: 20px;
`;

export const MoreInformation = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;

    color: #fff;

    font-size: 20px;
`;