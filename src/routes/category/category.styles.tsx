import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(19rem, 100%), 1fr));
    gap: 50px 20px;

    @media (max-width: 600px){
        grid-template-columns: repeat(auto-fit, minmax(min(10rem, 100%), 1fr));
    }
`

export const Title = styled.h2`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
`