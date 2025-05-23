import './ZombieFighters.css'
import ZombieImage from './ZombieImage';


const zombieFighters = ({id,name,price,strength,agility,img,team,setTeam,fighters,setZombieFighters,money,setMoney,teamStrength, setTeamStrength, teamAgility, setTeamAgility}) => {
    const handleAddFighter = (event) => {
      event.preventDefault();
      setTeam([...team,{id,name,price,strength,agility,img}])
      setZombieFighters(fighters.filter((fighter) => fighter.id !== id))
      setMoney(money - price)
      setTeamStrength(teamStrength + strength)
      setTeamAgility(teamAgility + agility)
    }
    
    return(
        <div className='fighters'>
            <ZombieImage img={img}/>
            <div className='fighterText'>
                <p><b>{name}</b></p>
                <p>Price: {price}</p>
                <p>Strength: {strength}</p>
                <p>Agility: {agility}</p>
                {money < price && <p style={{color: 'red'}}>Not enough money!</p>}
                <button onClick={handleAddFighter} disabled={money < price}>Add</button>
            </div>
        </div>
    );
}

export default zombieFighters