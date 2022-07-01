import React from 'react'
import {auth} from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";
import logo1 from "../../img/logo1.png"

export const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigation=(menuSelected)=>{
      console.log('hola')
    navigate('/Products',{menuSelected})
     }
  const singOutClick = () => {auth.signOut();navigate("/");}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ms-2">
  <img alt="" src={logo1} width="15%"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <div className="dropdown ms-auto">
  <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Menu
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li onClick={()=> handleNavigation('Breakfast')}><p className="dropdown-item bg-light" >Desayuno</p></li>
    <li onClick={() => handleNavigation('Lunch')}><p className="dropdown-item bg-light" >Almuerzo</p></li>
  </ul>
</div>
{/* onClick={handleNavigation("Breakfast")} */}
{/* onChange={handleNavigation('Breakfast')}
onChange={handleNavigation('Lunch')} */}


      <ul className="navbar-nav mb-3 mb-lg-0">
     
        <li className="nav-item ">
          <a className="nav-link active ms-3" aria-current="page" href="/AddProducts">Agregar productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3" aria-current="page" href="/Register">Crear usuarios</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-warning ms-5" type="submit" onClick={() => singOutClick()}>Cerrar Sesión</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar;
