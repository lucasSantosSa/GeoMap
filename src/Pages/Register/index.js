import React, { useState} from 'react'

import {useAuth} from '../../hooks/Auth';

import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

import Logo from '../../img/Logo.svg'
import TerralabLogo from '../../img/Terralab.svg'

import './styles.css'

function Registration() {

    const {signUp} = useAuth();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')

    
  
    async function handleRegister(e) {
      e.preventDefault();
  
      if ( password === repassword && password.length >= 6 
          && email.search('.com') !== -1) {
        
        signUp({ 
          name, 
          email, 
          password,});
        
          setName('');
          setEmail('');
          setPassword('');    
          setRePassword('');   
       }

      else {
        if (password !== repassword){
        window.alert('As senhas são diferentes');
        setPassword('');    
        setRePassword('');
        }

        if (password.length < 6) {
          window.alert('A senha deve possuir pelo menos 6 caracteres');
        }

        if ((email.search('.com')===-1)) {
          window.alert('Formato de e-mail inválido. Siga o exemplo: joao@dominio.com');
        }
      } 
    }  

    return (


        <div> 

        <div className="header">
          
          <h1>Geomap</h1>
          
            <div id="home-button">
             
                <button 

                type="submit" 
                name="home-button"> 
                <a className="white-button" href="/">Início</a>

                </button>

            </div>
            
        </div>
        

       <div id="login-container">

        <div id="logo">
            <img src={Logo} alt="Geomap Logo"/>
        </div>

    </div>

        <form onSubmit={handleRegister} id="login-container"> 

      <div>
        
        <input 
        placeholder="Digite seu nome"
        type="text" 
        className="input-box"
        id="user_name" 
        value={name}
        onChange={e => setName(e.target.value)}
        required/>

      </div>

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

      <div>
        
        <input
        placeholder="Confirme a senha"
        type="password"
        className="input-box" 
        id="re-password" 
        value={repassword}
        onChange={e => setRePassword(e.target.value)}
        required/>

      </div>

      <button type="submit" name="button-register">Cadastar</button>
    
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

export default Registration