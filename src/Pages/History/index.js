import { React, useCallback, useState, useContext, useEffect } from 'react'
import api from '../../services/api'
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import firebase from '../../config/firebase';

import {useAuth} from '../../hooks/Auth';

import Logo from '../../img/Logo.svg'
import TerralabLogo from '../../img/Terralab.svg'

import './styles.css'

 function History() {

    const {signOut, firebaseUID} = useAuth();
    async function handleSignOut(e) {
            e.preventDefault();        //Previne o comportamento padrão
            signOut();
      }

    // const userName = useEffect(() => {
    //         setName(api.get('/User',
    //             {
    //                 firebaseUID: String(firebaseUID),
    //                 squadID: 'squad6',
    //             },).catch((error) => {
    //                 console.log(error, 'ERRO DO BACKEND');
    //               }));
    //                 console.log(name);
    //          }, []);
        
    
     //let user = await api.get('/User', {firebaseUID: String(firebaseUID), squadID:'squad6'});
    
    
    
    return (

    <div>
            <form>
            <div className="header">
                 <h1>Geomap</h1>
                 <h2 id="UserName">Nome</h2>    
                 <button type="submit" className="exit" onClick={handleSignOut}>Sair</button>          
            </div> 
            </form>

            <div id="logo">
                 <img src={Logo} alt="Geomap Logo"/>
            </div>
            
    <div id="main-head"> 
        
        <div className="search-container">
            <input
                placeholder="Pesquise por nome do projeto"
                type="text" 
                className="input-box"
                id="email" 
                required/>

                <div className="icons">
                    <button className="icons" type="submit" name="button-register"> <AiOutlineSearch /> </button> 
                </div>   
        </div>
    </div>

    <hr className="line"/>   

    <div>
        <h2>Meus Projetos</h2>
    </div>
      
    <main>
        
        <ul className="history">
            
                <li className="routes">
                    <header>
                        <div className="routes">
                            <a className="MyProject" href="/myproject">
                                <h3>PROJETO 1</h3> 
                            </a>
                            <h4>10/05/2021</h4>
                        </div>
                        <hr /> 
                    </header>
                        <p className="routes">Aqui se encontra a descrição das rotas que o usuário registrou</p>                   
                    <div className="trashicon"> <FaTrashAlt /> </div>
                </li>
            
            <li className="routes">
                <a className="MyProject" href="/myproject">
                    <header>
                        <div className="routes">
                            <h3>PROJETO 2</h3>
                            <h4>10/05/2021</h4>
                        </div>
                        <hr /> 
                    </header>
                
                <p className="routes">Aqui se encontra a descrição das rotas que o usuário registrou</p>
                </a> 
                <div className="trashicon"> <FaTrashAlt /> </div>
            </li>

            <li className="routes">
                <header>
                    <div className="routes">
                            <a className="MyProject" href="/myproject">
                                <h3>PROJETO 3</h3> 
                            </a> 
                        <h4>10/05/2021</h4>
                    </div> 
                    <hr /> 
                </header>
                <p className="routes">Aqui se encontra a descrição das rotas que o usuário registrou</p>
                <div className="trashicon"> <FaTrashAlt /> </div>
            </li>

            <li className="routes">
                <header>
                    <div className="routes">
                            <a className="MyProject" href="/myproject">
                                <h3>PROJETO 4</h3> 
                            </a> 
                        <h4>10/05/2021</h4>
                    </div> 
                    <hr /> 
                </header>
                <p className="routes">Aqui se encontra a descrição das rotas que o usuário registrou</p>
                <div className="trashicon"> <FaTrashAlt /> </div>
            </li>

            <li className="routes">
                <header>
                    <div className="routes">
                            <a className="MyProject" href="/myproject">
                                <h3>PROJETO 5</h3> 
                            </a>
                        <h4>10/05/2021</h4>
                    </div> 
                    <hr /> 
                </header>
                <p className="routes">Aqui se encontra a descrição das rotas que o usuário registrou</p>
                <div className="trashicon"> <FaTrashAlt /> </div>
            </li>

            <li className="routes">
                <header>
                    <div className="routes">
                            <a className="MyProject" href="/myproject">
                                <h3>PROJETO 6</h3> 
                            </a> 
                        <h4>10/05/2021</h4>
                    </div>
                    <hr /> 
                </header>
                <p className="routes">Aqui se encontra a descrição das rotas que o usuário registrou</p>
                <div className="trashicon"> <FaTrashAlt /> </div>
            </li>

            
        </ul>

    </main>

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

export default History