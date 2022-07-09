import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'
import './media/images/one.jpeg'

export default function Home() {
    document.title='Homepage - Washo';

  return (
    <>
    <div class="main">
    <div class="container">
        <div class="box">
        <Link to="/Wash">
            <div class="imgBox">
                <img src={require("./media/images/one.jpeg")} alt="not found"/>
                <br />Wash
            </div>
            <div class="content">
                <h2>WASH<br/>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident, repudiandae, rerum nostrum ipsa, blanditiis ab expedita ad ullam sed eveniet earum </span></h2>
            </div>
        </Link>
        </div>
        <div class="box">
        <Link to="/DryClean">
            <div class="imgBox">
                <img src={require("./media/images/two.jpg")} alt="not found"/>
                <br />Dry Clean
            </div>
            <div class="content">
                <h2>Dry Clean<br/>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta saepe, praesentium fuga accusantium quas beatae numquam hic laborum velit.</span></h2>
            </div>
        </Link>
        </div>
        <div class="box">
        <Link to="/Iron">
            <div class="imgBox">
                <img src={require("./media/images/three.jpeg")} alt="not found"/>
                <br />Iron
            </div>
            <div class="content">
                <h2>Iron<br/>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam rerum, ducimus molestias quaerat, mollitia quibusdam dolor natus dolorem enim, et </span></h2>
            </div>
        </Link>
        </div>
    </div>
    </div>
    </>
  )
}
