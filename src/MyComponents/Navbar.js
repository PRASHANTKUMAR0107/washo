import React from 'react'
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  return (
    <div class='hello'>

<header>
      <nav class=" my-nav navbar  navbar-dark bg-dark navbar-expand-lg ">
      <div class="container">


      <Link class="navbar-brand" to="/">Title</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/"><h3> Home </h3><span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/YourOrders"><h3>Your Orders</h3></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#"><h3>Pricing</h3></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#"><h3>Notifications</h3></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/loginsignup"><h3>Login/SignUp</h3></Link>
          </li>
        </ul>
      </div>
  </div>
    </nav>
    </header>


  {/* <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
    </div>
  )
}
