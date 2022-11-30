import './App.css';
import Navbar from './navbar';
import Home from './home';
import Favourites from './favourites';
import Footer from './footer';
import Signup from './addfav';
import About from './about'
import { BrowserRouter,Routes,Route} from "react-router-dom"
// import State from './state';





function App() {

    let title = "tv shows"
  
  

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/favourites' element={<Favourites  data= {title}/>} />
        <Route path='/addfav' element={<Signup />} />

        
      </Routes>
      
      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
