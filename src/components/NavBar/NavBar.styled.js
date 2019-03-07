import styled, { keyframes } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const StyledNavBar = styled.div`
    height: 80px;
    padding: 25px 45px 20px 45px;
    margin: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 30;
    background: #fff;
`;

export const buzz = keyframes`
    50% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }
    100% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }
`;

export const SendMessageButton = styled(AnchorLink)`
    border: none;
    color: #2C3243;
    font-weight: bold;
    font-size: 22px;
    font-family: 'PT Serif', serif;
    cursor: pointer;
    float: right;
    outline: none;
    letter-spacing: 0;
    transition: all 280ms ease-in-out;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    text-decoration: none;

    &:hover {
        color: #FBB018;
        -webkit-animation-name: ${buzz};
        animation-name: ${buzz};
        -webkit-animation-duration: 0.15s;
        animation-duration: 0.15s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        text-decoration: none;
    }
`;
