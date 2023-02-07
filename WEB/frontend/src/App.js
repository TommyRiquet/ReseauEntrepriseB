import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Accueil from "./pages/Accueil";
import Error from "./pages/Error";
import Library from './pages/Library';
import Inscription from './pages/Inscription';
import PageConsultation from './components/PageConsultation';
import PageCreation from './components/PageCreation';
import CreationAppel from './pages/CreationAppel';


import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter className='center-container'>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/inscription/:login" element={<Inscription />} />
        <Route path="/bibli" element={<Library />} />
        <Route path="/consultation/:id" element={<PageConsultation data={"texte"} titre={"titre"} auteur={"auteur"}/>} />
        <Route path="/creation" element={<PageCreation />}/>
        <Route path="/creationPost" element={<CreationAppel />}/>

        

        {/* Lorsqu'aucune route n'a été trouvé */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
