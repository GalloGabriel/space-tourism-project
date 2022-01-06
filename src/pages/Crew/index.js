import Header from '../../components/Header';
import crewData from '../../data/crew.json';
import './crew.css';

export default function Crew(){

  function showCommander(){
    let commander = document.getElementById("crew01");
    let specialist = document.getElementById("crew02");
    let pilot = document.getElementById("crew03");
    let engineer = document.getElementById("crew04");

    commander.style.display = "flex";
    specialist.style.display = "none";
    pilot.style.display = "none";
    engineer.style.display = "none";
  }

  function showSpecialist(){
    let commander = document.getElementById("crew01");
    let specialist = document.getElementById("crew02");
    let pilot = document.getElementById("crew03");
    let engineer = document.getElementById("crew04");

    commander.style.display = "none";
    specialist.style.display = "flex";
    pilot.style.display = "none";
    engineer.style.display = "none";
  }

  function showPilot(){
    let commander = document.getElementById("crew01");
    let specialist = document.getElementById("crew02");
    let pilot = document.getElementById("crew03");
    let engineer = document.getElementById("crew04");

    commander.style.display = "none";
    specialist.style.display = "none";
    pilot.style.display = "flex";
    engineer.style.display = "none";
  }

  function showEngineer(){
    let commander = document.getElementById("crew01");
    let specialist = document.getElementById("crew02");
    let pilot = document.getElementById("crew03");
    let engineer = document.getElementById("crew04");

    commander.style.display = "none";
    specialist.style.display = "none";
    pilot.style.display = "none";
    engineer.style.display = "flex";
  }

  return(
    <div className="crew bg-crew">
      <Header />

      <h1>
        <span className="number-dest">02</span> 
        Meet your crew
      </h1>

      {crewData.map((data)=>{
        return(
          <div key={data.id} className="destination-info" id={`crew${data.id}`}>
            <img src={data.png} alt={`Imagem do destino: ${data.name}`}/>
            <hr id="crew-hr"/>
            <div className="switch-crew">
              <span className="circle-crew" id="span-crew01" onClick={showCommander}></span>
              <span className="circle-crew" id="span-crew02" onClick={showSpecialist}></span>
              <span className="circle-crew" id="span-crew03" onClick={showPilot}></span>
              <span className="circle-crew" id="span-crew04" onClick={showEngineer}></span>
            </div>
            <span className="crew-role">{data.role}</span>
            <span className="crew-name">{data.name}</span>
            <p>{data.bio}</p>
          </div>
        );
      })}
    </div>
  );
}