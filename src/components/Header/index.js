import homeData from '../../data/home.json';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header(){

  function showDiv(){
    let menu = document.getElementById('side-menu');

    menu.style.display = "block";
  }

  function closeDiv(){
    let close = document.getElementById('side-menu');

    close.style.display = "none";
  }

  return(
    <div className="header">

      <span className="logo">
        <img src="/assets/shared/logo.svg" alt="space tourism logo"/>
      </span>

      <span className="hamburger">
        <img onClick={showDiv} className="toggle" src="/assets/shared/icon-hamburger.svg" alt="hamburger icon"/>
      </span>

      
        <div className="menu" id="side-menu">
          <img onClick={closeDiv} className="toggle" src="/assets/shared/icon-close.svg" alt="close icon"/>

          <ul>
            {homeData.map((dado, index)=>{
              return(
                <span key={index}>{dado.id}
                  <Link to={ `${dado.link}` }> 
                    <li>{dado.section}</li>
                  </Link>
                </span>
              ) 
              
            })}
          </ul>
        </div>         
      
    </div>
  );
}