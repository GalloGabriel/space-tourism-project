import techData from '../../data/technology.json';
import Header from '../../components/Header';
import './tech.css';

export default function Technology(){

  function showLaunch(){
    let launch = document.getElementById("tech01");
    let spaceport = document.getElementById("tech02");
    let capsule = document.getElementById("tech03");

    launch.style.display = "flex";
    spaceport.style.display = "none";
    capsule.style.display = "none";
  }

  function showSpaceport(){
    let launch = document.getElementById("tech01");
    let spaceport = document.getElementById("tech02");
    let capsule = document.getElementById("tech03");

    launch.style.display = "none";
    spaceport.style.display = "flex";
    capsule.style.display = "none";
  }

  function showCapsule(){
    let launch = document.getElementById("tech01");
    let spaceport = document.getElementById("tech02");
    let capsule = document.getElementById("tech03");

    launch.style.display = "none";
    spaceport.style.display = "none";
    capsule.style.display = "flex";
  }

  return(
    <div className="tech bg-tech">
      <Header />

      <h1>
        <span className="number-dest">03</span> 
        Space Launch 101
      </h1>

      {techData.map((data)=>{
        return(
          <div key={data.id} className="destination-info" id={`tech${data.id}`}>
            <img id={`tech-image${data.id}`} src={data.landscape} alt={`Imagem da tecnologia utilizada: ${data.name}`}/>
            <div className="switch-tech">
              <span className="circle-tech" id="span-tech01" onClick={showLaunch}>1</span>
              <span className="circle-tech" id="span-tech02" onClick={showSpaceport}>2</span>
              <span className="circle-tech" id="span-tech03" onClick={showCapsule}>3</span>
            </div>
            <span className="crew-name">{data.name}</span>
            <p id={`tech-info${data.id}`}>{data.description}</p>
          </div>
        );
      })}
    </div>
  );
}