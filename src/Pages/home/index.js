import { React, useState } from 'react'

import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

import {useAuth} from '../../hooks/Auth';

import './styles.css'

import Logo from '../../img/Logo.svg';
import TerralabLogo from '../../img/Terralab.svg'


function Home() {

    const {signIn} = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [squadID] = useState('squadID')
    async function handleRegister(e) {
      e.preventDefault()        //Previne o comportamento padrão
      signIn({
        email, 
        password,
        squadID,
      });     
    }

    return (

        <div> 

        <div className="header">
          
          <h1>Geomap</h1>
            
        </div>
        

       <div id="login-container">

        <div id="logo">
            <img src={Logo} alt="Geomap Logo"/>
        </div>

    </div>

        <form onSubmit={handleRegister} id="login-container"> 

      <div>
        
        <input
        placeholder="E-mail"
        type="email" 
        className="input-box"
        id="email" 
        value={email}
        onChange={e => setEmail(e.target.value)}
        required/>

      </div>

      <div>
        
        <input
        placeholder="Senha"
        type="password" 
        className="input-box"
        id="password" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        required/>

      </div>

      <button type="submit" name="button-register">Entrar</button>

            <div id="forgot-pass"><a href="/Forgot-Pass">Esqueci minha senha</a></div>
            

            <div className="login-utils">
                <p>Ainda não tem conta?</p>
            </div>

            <div className="login-utils">
                <a id="register" href="Registration">Cadastre-se</a>
            </div>
            
    
    </form>

    <div className="siteFooterBar">
        
        <div className="content">
            <img id="TerralabLogo" src={TerralabLogo} alt="Terralab Logo"/>
            <div className="foot">Todos os direitos reservados - Trainee TerraLAB 2021
            </div>
            <div id="faceicon" className="foot"> <FaFacebookF /> </div>

            <div id="instaicon" className="foot"> <GrInstagram /> </div>
        </div>
        
    </div>
    
</div>

    )
    
}

export default Home