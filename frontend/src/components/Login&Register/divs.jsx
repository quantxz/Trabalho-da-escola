import styled from "styled-components"

export const ActionsDiv = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 60vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 10px 15px 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
`

export const Button = styled.button`
    position: relative;
    width: 35%;
    margin-top: 25%;
`

export const Login = styled.div`
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 50%;
    margin-left: -50%;
    display: flex;
    flex-direction: column;
    align-items : center;
    text-align: center;
`

export const Register = styled.div`
    position: absolute;
    z-index: 3;
    height: 100%;
    width: 50%;
    margin-left: 50%;
    display: flex;
    flex-direction: column;
    align-items : center;
    text-align: center;
`
