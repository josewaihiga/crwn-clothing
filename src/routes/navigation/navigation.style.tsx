import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 600px){
    height: 60px;
    padding: 10px 0px;
    margin-bottom: 20px;
  }

`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px 0;

  @media screen and (max-width: 600px){
    width: 50px;
    padding: 0px;

  }

`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 600px) {
    width: 80%;
  }
`;



type LinkProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | {
      as?: React.ElementType | undefined;
      to?: string;
    };

export const NavLink = styled(Link)<LinkProps>`
  padding: 10px 15px;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 10px 10px;
    /* font-size: 0.8em; */
  }
`;

export const Wave = styled.span`
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: 2; /* infinite: Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }

    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }

`;

export const DisplayName = styled(NavLink)`
  cursor: grab;
  user-select: none;

  border: 1px solid black;
  border-radius: 100px;

  @media (max-width: 800px){
    display: none;
  }
`