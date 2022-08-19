import './Header.css'
import menu from './menu.svg'


 export const Header = ()=> {
function start(){

   let newmenu = document.querySelector('.body-header')
   newmenu.innerHTML = `
   <div className="body-header">
   <div><button><a href='#home'>Home</a></button></div>
   <div><button><a href='#sobre'>Sobre</a></button></div>
   <div><button><a href='#projetos'>Projetos</a></button></div>
   <div><button><a href='#contatos'>Contatos</a></button></div>
  
  </div>
   `
    
}
function back(){
   let newmenu = document.querySelector('.body-header')
   newmenu.innerHTML = `
   <div className="body-header">
   <button onClick={start}><img src={menu} /> </button>
  
  </div>
   `
}


    
    return(
       <div className="body-header" id='new-menu'>
        <div><a id='link' href='#home'>Home</a></div>
        <div><a id='link' href='#sobre'>Sobre</a></div>
        <div><a id='link' href='#projetos'>Projetos</a></div>
        <div><a id='link'  href='#contatos'>Contatos</a></div>
        <button onClick={start}><img src={menu} /> </button>
       </div>
    )
}