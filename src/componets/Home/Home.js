import styled from 'styled-components';
import "./Home.css"
import igor from './assets/foto.jpg'


const Container = styled.div`
display: flex;
height: auto;
background-color:black;
margin-top: 30px;
width: auto;
flex-direction: column;
@media(max-width: 570px) {
    flex-direction: column;
   justify-content:center
}


`
const Part1 = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



@media(max-width:560px ) {
    justify-content: center;
    align-items:center
}

`
const Part2 = styled.div`
flex: 1;
display: flex;
justify-content: center;


 


`
const Title = styled.div`
margin-left: 5%;
color: #F3015D;
`



 export const Home = ()=> {
    return(
        <Container>
            <Part1>
              <div id='home' className='body-ft'>
                <div className='ft'>
                <img src={igor} className='igor-ft' />
                </div>
                <div className='article'>
                <h1 className='Title'>Welcome</h1>
                <h3   className='text'>Sou desenvolvedor focado em desenvolvimento front-end.<br />Tenho dedicação e esforço como programador web.E acredito na tecnologia como uma grande evolução para a humanidade em que vivemos.</h3>
                </div>
              </div>
            </Part1>
            <Part2>
                <div className='body-animation'></div>
            </Part2>
        </Container>
    )
}