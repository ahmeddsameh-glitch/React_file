import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const Navbar = ({ islogged }) => {
  const navigate = useNavigate();

  const handleHome = (event) => {
    if (!islogged) {
      event.preventDefault();
      alert('Please log in first');
    } else {
      navigate('/Home');
    }
  };

  return (
    <nav>
      <div className="nav-components">
        <Link to='/Home' onClick={handleHome} className="nav-link">
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