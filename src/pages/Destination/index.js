import Header from '../../components/Header';
import placesData from '../../data/destinations.json';
import './destination.css';

export default function Destination(){

  function showMoon(){
    let moon = document.getElementById("place01");
    let mars = document.getElementById("place02");
    let europa = document.getElementById("place03");
    let titan = document.getElementById("place04");

    moon.style.display = "flex";
    europa.style.display = "none";
    titan.style.display = "none";
    mars.style.display = "none";
  }

  function showMars(){
    let moon = document.getElementById("place01");
    let mars = document.getElementById("place02");
    let europa = document.getElementById("place03");
    let titan = document.getElementById("place04");

    moon.style.display = "none";
    europa.style.display = "none";
    titan.style.display = "none";
    mars.style.display = "flex";
  }

  function showEuropa(){
    let moon = document.getElementById("place01");
    let europa = document.getElementById("place03");
    let mars = document.getElementById("place02");
    let titan = document.getElementById("place04");

    moon.style.display = "none";
    mars.style.display = "none";
    titan.style.display = "none";
    europa.style.display = "flex";
  }

  function showTitan(){
    let moon = document.getElementById("place01");
    let mars = document.getElementById("place02");
    let europa = document.getElementById("place03");
    let titan = document.getElementById("place04");

    moon.style.display = "none";
    mars.style.display = "none";
    europa.style.display = "none";
    titan.style.display = "flex";
  }

  return(
    <div className="bg-destination destination">
      <Header />

      <h1>
        <span className="number-dest">01</span> 
        Pick your destination
      </h1>

      {placesData.map((data)=>{
        return(
          <div key={data.id} className="destination-info" id={`place${data.id}`}>
            <img src={data.png} alt={`Imagem do destino: ${data.name}`}/>
            <div className="switch-place">
              <span id="span-place01" onClick={showMoon}>MOON</span>
              <span id="span-place02" onClick={showMars}>MARS</span>
              <span id="span-place03" onClick={showEuropa}>EUROPA</span>
              <span id="span-place04" onClick={showTitan}>TITAN</span>
            </div>
            <span className="destination-name">{data.name}</span>
            <p>{data.description}</p>
            <hr/>
            <div className="distance-travel-info">
              <div className="distance-container">
                <span className="distance-title">Avg. distance</span>
                <span className="distance">{data.distance}</span>
              </div>
              <div className="travel-container">
                <span className="travel-title">Est. Travel Time</span>
                <span className="travel">{data.travel}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}