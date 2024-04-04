import './App.css';
import Body from './components/body/main';
import Header from './components/header/header';
import {Footer} from "./components/footer/footer"
import {Faq} from "./components/faq/faq"
import { ThemeProvider } from "@material-tailwind/react";
import ApiData from './components/dashboard/dashboard';
import { Route,Routes } from 'react-router-dom';
import bgImage from "./assets/alphasnifferbg.jpg"


function App() {
  return (
    <ThemeProvider>
    <div className="App">
    <img className="bg-image gradient-text" src={bgImage}/>
    <Header/>
   <Routes>
   <Route path='/' element={<Body/>}/>
    <Route path='/dashboard' element={<ApiData/>}/>
    </Routes>
    <Footer/>
  
    </div>
    </ThemeProvider>
  );
}

export default App;
