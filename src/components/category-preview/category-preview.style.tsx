import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const Title = styled(Link)`
      font-size: 28px;
      margin-bottom: 25px;
      cursor: pointer;
`

export const Preview = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(19rem, 100%), 1fr));
      gap: 50px 20px;
`