import styled from "styled-components";

export const ModalBG = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: rgba(149, 165, 166, 0.7);
    width: 100%;
    height: 100%;
    z-index: 979;
`

export const ModalDiv = styled.div`
    position: absolute;
    top: 36%;
    left: 35%;
    tranform: translate(-40%, -50%);
    background-color: #fff;
    width: 30vw;
    height: 28vh;
    z-index: 980;
    color: #000;
    border-radius: 15px;
`