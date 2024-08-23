import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import './navbar.css';
const Navbar = ({ islogged }) => {
  const navigate = useNavigate();

  const handleHome = (event) => {
    if (!islogged) {
      event.preventDefault();
      navigate('/home');
      // alert('Please log in first');
    } else {
     
    }
  };

  return (
    <nav>
      <div className="AddBlogs"><p>AddBlogs</p></div>
      <div className="nav-components">
        <Link to='/home' onClick={handleHome} className="nav-link">
          Home
        </Link>
        <Link to='/add' className="nav-link">
          Add
        </Link>
        <Link to='/Login' className="nav-link">
          {islogged ? 'Logout' : 'Login'}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;