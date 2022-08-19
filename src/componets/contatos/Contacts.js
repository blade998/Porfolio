import styled from "styled-components"
import './Contacts.css'
import github from './icones/github.svg'
import linkedin  from './icones/linkedin.svg'
import instagram  from './icones/instagram.svg'

const Bodyfooter = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 50%;
`

const Titlecontact = styled.div`
display: flex;
font-size: 50px;
margin-right:60%;
color: #F3015D;

@media (max-width:680px){
    margin-right: 25%;
}

`


export const Contact = ()=> {
    return(
        <footer>
            <Bodyfooter>
                <Titlecontact>Contatos:</Titlecontact>
                <div className="contacts" id="contatos">
                <div><h4 typeof="number">Numero:11995329276</h4></div>
                <div><h4>Gmail:bigor9108@gmail.com</h4></div>
                </div>
                <div className="icons-footer">
                    <div><a href="https://github.com/blade998"><img src={github} /> </a></div>
                    <div><a href="https://www.linkedin.com/in/igor-barbosa-dos-santos-b8977720a/"><img src={linkedin} /> </a></div>
                    <div><a href="https://www.instagram.com/000_barbosa_000/"><img src={instagram} /> </a></div>
                </div>
              
            </Bodyfooter>
        </footer>
    )
}