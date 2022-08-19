import styled from "styled-components"
import './Sobre.css'
import Html from './fotos/icons/Html.svg'
import Css from './fotos/icons/Css.svg'
import Javascript from './fotos/icons/Javascript.svg'
import React from './fotos/icons/react.svg'
import Sass from './fotos/icons/Sass.svg'
import Tailwind from './fotos/icons/Tailwind.svg'



const Container = styled.div`
margin-top: 100px;
color: white;
display: flex;
-webkit-text-stroke-width: 1px;  // style-font
flex-direction: column;

  
    
`
const Part1 = styled.div`
flex: 1;
   display: flex;
   justify-content: center;
   align-items: center;
   
`

const Part2 = styled.div`
 flex: 1;
color: white;
display: flex;
align-items: center;
justify-content:center ;
flex-direction: column;

`
const Text = styled.h1`
color: #F3015D;
text-align: center;

`


export const Sobre = ()=> {
    return(
        <Container >
            <Part1>
                <div className="body-sobre" id="sobre">
                    <h1 className="title-sobre">Sobre mim</h1><br></br>
                    <h3 className="article-sobre">Meu nome é Igor Barbosa dos Santos, nasci em São Roque no estado de São Paulo.<br/>
                    quando mais novo sempre fui próximo com a tecnologia, como jogos e vídeos.Estudei vários<br/>
                    cursos de Informática é até manutenção de computadores é programação.Sou uma pessoa curiosa<br/>
                    e otimista.Amo programação, principalmente na parte da web e de jogos.Tenho  conhecimentos <br/>
                    em programação front-end  e pretendo me aprimorar para back-end.Tenho um sonho de ser um  <br/>
                    grande programador no mercado e irei me esforçar o maximo nessa conquista.
                     




                    
                    </h3>
                    <h4>Name: Igor Barbosa dos Santos</h4>
                    <h4>Endereço: São roque, SP</h4>
                    <h4>Idade: 19 Anos</h4>




                </div>
            </Part1>
           
            <Part2>
            <Text><h1 className="Title-column">HABILIDADES</h1></Text>
                <div className="body-cards">
                <div className="column1">
                    <div className="card"><img src={Html}  className='icon'/></div>
                    <div className="card"><img src={Css}  className='icon' /></div>
                </div>
                    <div className="column2">
                    <div className="card"><img src={Javascript}  className='icon'/></div>
                    <div className="card"><img src={React}  className='icon'/></div>
                </div>
                    <div className="column3">
                    <div className="card"><img src={Sass}  className='icon'/></div>
                    <div className="card"><img src={Tailwind}  className='icon' /></div>
                </div>
                    
                </div>
            </Part2>
        </Container>
    )
}