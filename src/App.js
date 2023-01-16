import './App.css';
 import Main from './components/Main component/main'
 import Azkar from './components/Azkar component/azkar';
 import Sebha from './components/Sebha component/sebha';
import Nav from './components/navbar component/nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
<>
<div className='container'>
  <div className='row'>
    <Router>
  <Nav/>
  <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Sebha" element={<Sebha />} />
        <Route path="/Azkar" element={<Azkar />} />
        </Routes>
  </Router>
  </div>

</div>
{/* <Main/> */}
{/* <Azkar/> */}
{/* <Sebha/> */}
</>
  );
}

export default App;
