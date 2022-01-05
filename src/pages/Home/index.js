import Header from '../../components/Header';
import homeData from '../../data/home.json';
import './home.css';

export default function Home(){
  return(
    <div className="bg-home">
      <Header />

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