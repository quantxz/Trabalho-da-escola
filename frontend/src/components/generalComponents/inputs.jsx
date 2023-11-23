import styled from "styled-components";

export const Label = styled.label`
    color: #000;
`

export const Input = styled.input`
    color: #000;
    background-color: #fff;
    border-bottom: solid #45b6fe;
    width: 60%;
`;

export const Submit = styled.input.attrs({type: 'submit'})`
    position: absolute;
    top: 94%;
    left: 43%;
    cursor: pointer;
    background-color: #3388FF;
    width: 7.5vw;
    height: 3.9vh;
    color: #fff;
    border-radius: 5px;
`