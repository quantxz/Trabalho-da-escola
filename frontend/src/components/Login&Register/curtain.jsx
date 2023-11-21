import styled, { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
 0% { margin-left: 50%; }
 100% { margin-left: ${(props) => props.curtainPosition}; }
`

export const Curtain = styled.div`    
    position: absolute;    
    z-index: 23;
    width: 50%;
    height: 100%;
    margin-left: ${(props) => props.curtainPosition};
    background-color: #55AAFF;
    align-items: center;
    text-align: center;
    background: url('https://coolbackgrounds.io/images/backgrounds/blue/blue-contour-949e2eab.svg');
    background-size: cover;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-radius: 5px;
`