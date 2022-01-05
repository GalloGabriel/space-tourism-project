import homeData from '../../data/home.json';
import './header.css'

export default function Header(){
  return(
    <div className="header">

      <span className="logo">
        <img src="/assets/shared/logo.svg" alt="space tourism logo"/>
      </span>

      <span className="hamburger">
        <img src="/assets/shared/icon-hamburger.svg" alt="hamburger icon"/>
      </span>

      
        {homeData.map((data, index)=>{
          return(
            <div key={index} className="info">
              <span>{data.subtitle}</span>
              <h1>{data.title}</h1>
              <p>{data.text}</p>
            </div>    
            
          );
        })}

        <div className="circle">
          <span>Explore</span>
        </div>      
      
    </div>
  );
}