import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Accueil from "./pages/Accueil";
import Error from "./pages/Error";
import Library from './pages/Library';
import Inscription from './pages/Inscription';
import PageCreation from './components/PageCreation';
import CreationAppel from './pages/CreationAppel';
import LibraryFormateur from './components/LibraryFormateur';
import LibraryAdmin from './components/LibraryAdmin';
import FormateurAppel from './pages/FormateurAppel';
import InscriptionAppel from './components/InscriptionAppel';
import ConnexionAppel from './components/ConnexionAppel';
import AccueilServeur from './pages/AccueilServeur';
import ConsultationAppel from './pages/ConsultationAppel';




import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/NavBar';

//<Route path="/consultation/:id" element={<PageConsultation data={"texte"} titre={"titre"} auteur={"auteur"}/>} />


function App() {
  return (
    <>
    <CustomNavbar/>
    <BrowserRouter className='center-container'>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/inscription/:login" element={<Inscription />} />
        <Route path="/bibli" element={<Library />} />
        <Route path="/bibliFormateur" element={<LibraryFormateur />} />
        <Route path="/bibliAdmin" element={<LibraryAdmin />} />
        <Route path="/consultation/:id" element={<ConsultationAppel />} />
        <Route path="/creation" element={<PageCreation />}/>
        <Route path="/creationPush/:titre/:auteur/:texte" element={<CreationAppel />}/>
        <Route path="/formateurValid" element={<FormateurAppel />}/>
        <Route path="/inscriptionAppel/:pseudo/:mail/:mdp/:statut" element={<InscriptionAppel />}/>
        <Route path="/connexionAppel/:pseudo/:mdp" element={<ConnexionAppel />}/>




        

        {/* Lorsqu'aucune route n'a été trouvé */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
