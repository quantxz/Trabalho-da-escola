import styled from "styled-components";

export const Labels = styled.label`
    &:first-child {
        margin-top: 22%;
    }
    margin-top: 10%;
    color: #999;
`

export const Inputs = styled.input`
    width: 65%;
    height: 3.5%;
    color: blue;
    border: none;
    border-bottom: solid #45b6fe;
    color: #000;
    background-color: #fff;
`

export const InputsPassword = styled.input.attrs({type: 'password'})`
    width: 65%;
    height: 3.5%;
    border: none;
    border-bottom: solid #45b6fe;
    text-decoration: none;
    color: #000;
    background-color: #fff;
`

export const Submit = styled.input.attrs({ type: 'submit' })`
    position: relative;
    top: 15%;
    cursor: pointer;
    background-color: #3388FF;
    width: 7.5vw;
    height: 2.9vh;
    color: #fff;
    border-radius: 5px;
`