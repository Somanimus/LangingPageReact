import './App.css';
import Header from './components/header';
import Main from './components/main';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Team from './pages/team/team';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/our-team' element={<Team/>} />
      </Routes>
      <Footer/>
   </div>
  );
}

export default App;
