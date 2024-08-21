import { useEffect , useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Add from './Add';
const App= () =>{
  const [islogged, setIslogged] = useState(false);
  const handleLogin = () => {
    setIslogged(true);
  }
  const handleLogout = () => {
    setIslogged(false);
  }
useEffect(() =>{

},[]);
  return (
   <>
   <BrowserRouter>
   <Navbar islogged ={islogged}/>
   
     !islogged ? (
      <>
        <header>
          <h1>Please log in to continue</h1>
          {/* Add your login form or button here */}
        </header>
      </>
    ) 
    : (
      <Routes>
        <Route path="/add" element={<Add />} />
        {/* Add your other routes here */}
      </Routes>
      )
   </BrowserRouter>
   </>
  );
}

export default App;
