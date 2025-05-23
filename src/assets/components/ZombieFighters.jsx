import './ZombieFighters.css'
import ZombieImage from './ZombieImage';


const zombieFighters = ({id,name,price,strength,agility,img,team,setTeam,fighters,setZombieFighters,money,setMoney,teamStrength, setTeamStrength, teamAgility, setTeamAgility}) => {
    const handleAddFighter = () => {
      setTeam([...team,{id,name,price,strength,agility,img}])               // Adds the Selected Fighter into the Team Array
      setZombieFighters(fighters.filter((fighter) => fighter.id !== id))    // Remove the fighter from the Zombie Fighters Array
      setMoney(money - price)                                               // Decrement the money based on the price of the fighter
      setTeamStrength(teamStrength + strength)                              // Increment the Team Strength accordingly
      setTeamAgility(teamAgility + agility)                                 // Increment the Team Agility accordingly
    }
    
    return(
        <div className='fighters'>
            <ZombieImage img={img}/>
            <div className='fighterText'>
                <p><b>{name}</b></p>
                <p>Price: {price}</p>
                <p>Strength: {strength}</p>
                <p>Agility: {agility}</p>
                {/* Displays a warning to the user that the amount is less than required to purchase the fighter */}
                {money < price && <p style={{color: 'red'}}>Not enough money!</p>}
                {/* Disables the button when the amount is less than required to purchase the fighter */}
                <button onClick={handleAddFighter} disabled={money < price}>Add</button>
            </div>
        </div>
    );
}

export default zombieFighters