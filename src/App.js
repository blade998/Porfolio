
import './App.css';
import { Header } from './componets/Header/Header';
import { Home } from './componets/Home/Home';
import { Sobre } from './componets/Home/sobre/Sobre';
import { Proje } from './componets/projetos/Template';
import { Contact } from './componets/contatos/Contacts';

function App() {
  return (
   <div className='container-port'>
    <Header/>
    <Home/>
    <Sobre/>
    <Proje/>
    <Contact/>
    
   </div>
  );
}

export default App;
