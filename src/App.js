import { useEffect , useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Add from './Add';
import { Helmet } from 'react-helmet';
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
   <Helmet>
           <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet" />
      </Helmet>
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
