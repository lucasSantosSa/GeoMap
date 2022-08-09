import { React, useState } from 'react'

import Logo from '../../img/Logo.svg';
import TerralabLogo from '../../img/Terralab.svg'
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import firebase from 'firebase'

import './styles.css'
import { AuthProvider } from '../../hooks/Auth';

function ForgotPass () {

    
    const [email, setEmail] = useState('')
  
    async function handleRegister(e) {
        e.preventDefault()        //Previne o comportamento padrão
   
        setEmail(email)
         
        if(email != null) {
            var auth = firebase.auth();
            var emailAddress = email.toString();

            auth.sendPasswordResetEmail(emailAddress).then(function() {
            // Email sent.
            }).catch(function(error) {
                console.log(error)
            });
        }
    }

    return (

    <div>
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
                <div >

                <div id="logo">
                    <img src={Logo} alt="Geomap Logo"/>
                </div>

            <div className="login-container-top">

                <h2 >Esqueceu sua senha de acesso? Nós a renviaremos para seu e-mail  
                </h2>

                <div>
                    <p id="forgot-pass-message">Se você esqueceu sua senha para acesso ao site, não se preocupe. 
                        Apenas informe no campo a seguir o endereço de e-mail de cadastro 
                        que você possui no site e reenviaremos sua senha para o e-mail informado.
                    </p>
                </div>
                
            </div>

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

      <button type="submit" name="button-register">Enviar</button>        
    
    </form>

    <div className="siteFooterBar">
        
        <div className="content">
            <img id="TerralabLogo" src={TerralabLogo} alt="Terralab Logo"/>
            <div className="foot">
                Todos os direitos reservados - Trainee TerraLAB 2021
            </div>
            <div id="faceicon" className="foot"> <FaFacebookF /> </div>

            <div id="instaicon" className="foot"> <GrInstagram /> </div>
        </div>
    </div>

    </div>

    )
}

export default ForgotPass