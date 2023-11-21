import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { ActionsDiv, Login, Register, Button } from './components/Login&Register/divs'
import { Curtain } from './components/Login&Register/curtain'
import { Inputs, Labels, Submit, InputsPassword } from './components/inputs/inputs'
import { MdEmail } from "react-icons/md";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { Form } from './components/Login&Register/form'
import { Title, SubTitle } from './components/Login&Register/Title'
import { Description } from './components/descriptions/description'
import { FaUserAlt, FaCalendar } from "react-icons/fa";

export let curtainPosition
export let originalPosition

function App() {
  const [login, setLogin] = useState(false) 
  
  if(!login) {
    originalPosition = "50%"
    curtainPosition = "-50%"
  } else {
    originalPosition = "-50%"
    curtainPosition = "50%"
  }

  return (
    <>
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
          <Submit />
        </Form>
      </Login>

      <Register>
        <Title>
          Cadastre-se aqui
        </Title>
       <Form>
          <Labels><MdEmail color='#45b6fe'/> Email</Labels>
          <Inputs placeholder='Email' required />
          <Labels><FaUnlockKeyhole color='#45b6fe'/> Password</Labels>
          <InputsPassword placeholder='Password' required/>
          <Labels><FaUserAlt color='#45b6fe'/> Name</Labels>
          <Inputs placeholder='name' required />
          <Labels><FaCalendar color='#45b6fe'/> Age</Labels>
          <Inputs placeholder='age' maxLength="10" required/>
          <Submit />
        </Form>
      </Register>
    </ActionsDiv>
    </>
  )
}

export default App
