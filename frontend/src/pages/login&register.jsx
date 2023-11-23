import React, { useState } from 'react';
import { ActionsDiv, Login, Register, Button } from '../components/login&registerForm/Login&Register/divs'
import { Curtain } from '../components/login&registerForm/Login&Register/curtain'
import { Inputs, Labels, Submit, InputsPassword } from '../components/login&registerForm/inputs/inputs'
import { MdEmail } from "react-icons/md";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { Form } from '../components/generalComponents/form'
import { Title, SubTitle } from '../components/login&registerForm/Login&Register/Title'
import { Description } from '../components/login&registerForm/descriptions/description'
import { FaUserAlt, FaCalendar } from "react-icons/fa";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Modal from '../components/modals/modal';
export let curtainPosition
export let originalPosition

function LoginAndRegister() {
    const [login, setLogin] = useState(false) 
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [modalState, setModalState] = useState(false)

    const navigate = useNavigate();
    function navigateTo(path) {
        navigate(path)
    }
    
    async function registerUser(name, email, password, age, e) {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:3001/register/user', {
                name,
                email,
                password,
                age
            })
            if(response.data.status === 200) {
                setModalState(true)
                setLogin(!login)
            }
        } catch(error) {
            console.log(error)
        } 
    }
    
    async function loginUser(email, password, e, path) {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password
            })
            
            if(response.data.status == 200 && response.data.message === "ok") {
                navigateTo(path);
            }
        } catch(error) {
            console.log(error)
        } 
    }

    if(!login) {
        originalPosition = "50%"
        curtainPosition = "-50%"
    } else {
        originalPosition = "-50%"
        curtainPosition = "50%"
    }

    return (
        <>
        <Modal isOpen={modalState} setModal={() => setModalState(!modalState)} content="Parabens, voce foi cadastrado com sucesso, basta fazer login!!!"/>
            <ActionsDiv>
                <Curtain curtainPosition={curtainPosition} originalPosition={originalPosition}>
                <SubTitle> { !login ? "Ja tem uma conta ?" : "Não tem uma conta ainda ?"} 
                </SubTitle>
                <Description> {
                    !login ? "Faça seu login, você só precisará do seu email e senha" : 
                    "Crie uma agora mesmo, você precisara de um email, uma senha, seu nome, e sua data de nascimento"
                    } </Description>
                <Button 
                    onClick={ () => { setLogin(!login)} }>
                    {!login ? "Login" : "Cadastrar-se"}
                    </Button>
                </Curtain>

                <Login>
                    <Title>
                        Faça seu login aqui
                    </Title>
                    <Form>
                        <Labels><MdEmail color='#45b6fe'/> Email</Labels>
                        <Inputs placeholder='Email' required />
                        <Labels><FaUnlockKeyhole color='#45b6fe'/> Password</Labels>
                        <InputsPassword placeholder='Password' required/>
                        <Submit onClick={(e) => {
                            e.preventDefault()
                            loginUser(email, password, e, "/nova")
                        }}/>
                    </Form>
                </Login>

                <Register>
                    <Title>
                        Cadastre-se aqui
                    </Title>
                    <Form>
                        <Labels><MdEmail color='#45b6fe'/> Email</Labels>
                        <Inputs
                        placeholder='Email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <Labels><FaUnlockKeyhole color='#45b6fe'/> Password</Labels>
                        <InputsPassword
                        placeholder='Password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <Labels><FaUserAlt color='#45b6fe'/> Name</Labels>
                        <Inputs
                        placeholder='name'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <Labels><FaCalendar color='#45b6fe'/> Age</Labels>
                        <Inputs
                        placeholder='dd/mm/yyyy'
                        maxLength="10"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        />
                        <Submit onClick={(e) => {
                        e.preventDefault(); 
                        registerUser(name, email, password, age, e, "/nova");
                        }} />
                    </Form>
                </Register>
            </ActionsDiv>
        </>
    )
}

export default LoginAndRegister