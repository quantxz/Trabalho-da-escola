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
import axios from 'axios'

export let curtainPosition
export let originalPosition

function App() {
  const [login, setLogin] = useState(false) 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  
  async function registerUser(name, email, password, age) {
    await axios.post('http://localhost:3001/register', {
      name,
      email,
      password,
      age
    }).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
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
          <Submit onClick={() => registerUser(name, email, password, age)} />
        </Form>
      </Register>
    </ActionsDiv>
    </>
  )
}

export default App
