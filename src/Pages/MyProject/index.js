import React from 'react'

import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { FiEdit} from 'react-icons/fi'
import {useAuth} from '../../hooks/Auth';

import Logo from '../../img/Logo.svg'
import TerralabLogo from '../../img/Terralab.svg'

import MyComponent from '../../components/Maps'

import './styles.css'


function MyProject() {

    const {signOut} = useAuth();

    async function handleSignOut(e) {
        e.preventDefault()        //Previne o comportamento padrão
        
        signOut()
    
    }

    return (

        <div>
            
                <div className="header">
                    <h1>Geomap</h1>
                    <h2 id="UserName">d</h2>
                    <button type="submit" className="exit" onClick={handleSignOut}>Sair</button>
                </div>
          

            <div id="logo">
                <img src={Logo} alt="Geomap Logo" />
            </div>
            
            <main className="body">
                <header className="header-main">
                    <h3 className="header-main">Projeto 1</h3>
                    <button type="submit">LISTA DE ROTAS</button>
                    <button type="submit">VER TODAS AS ROTAS</button>
                    <div className="editicon"> <FiEdit /> </div>
                </header>

                    <div className="project-description">
                        <ul>
                            <li className="routes">
                                <header>
                                    <div className="container2">
                                        <h3>Rota 1</h3>
                                    </div>
                                    <hr />
                                    <div className="container2">
                                        <label htmlFor="raio">Local</label>
                                        <label htmlFor="raio">Raio:</label>
                                    </div>
                                    <hr />
                                    <div className="description">
                                        <label htmlFor="raio">Descrição</label>
                                </div>
                                <hr/>
                                    <div className="container2">
                                        <label htmlFor="latitude">Latitude:</label>
                                        <label htmlFor="longitude">Longitude:</label>
                                    </div>
                                </header>
                            </li>
                        </ul>
                        <div className="map">
                        <MyComponent></MyComponent>
                        </div>
                        
                    </div> 

                <footer className="body">
                    <button type="submit">DOWNLOAD</button>
                </footer>
            </main>

            <div className="siteFooterBar">

                <div className="content">
                    <img id="TerralabLogo" src={TerralabLogo} alt="Terralab Logo" />
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

export default MyProject